import { ZodType, z } from 'zod';

import {
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MAX_CHARACTERS_MSG
} from 'constants/schema-values';

const FileList = z.any() as ZodType<FileList>;

type FileListType = z.infer<typeof FileList>;

export const profileSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'O nome é obrigatório'
    })
    .max(30, { message: MAX_CHARACTERS_MSG })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ');
    }),
  email: z
    .string()
    .nonempty({
      message: 'O e-mail é obrigatório'
    })
    .email({
      message: 'Formato de e-mail inválido'
    })
    .toLowerCase(),
  password: z
    .string()
    .nonempty({
      message: 'A senha é obrigatória'
    })
    .min(6, {
      message: 'A senha precisa ter no mínimo 6 caracteres'
    }),
  description: z.string().max(200, {
    message: MAX_CHARACTERS_MSG
  }),
  avatar: z
    .custom<FileListType>()
    .optional()
    .nullable()
    .refine((file) => {
      if (file) {
        return file?.[0]?.size <= MAX_FILE_SIZE, `Tamanho máximo de 5MB`;
      }
    })
    .refine((file) => {
      if (file) {
        return (
          ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
          'Formato de imagem inválido'
        );
      }
    })
    .transform((file) => {
      return file?.[0];
    })
});
