import { z } from 'zod';

import { MAX_CHARACTERS_MSG } from 'constants/schema-values';

export const registerSchema = z
  .object({
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
    confirmPassword: z.string()
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais'
  });
