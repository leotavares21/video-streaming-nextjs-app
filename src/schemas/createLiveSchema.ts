import { z } from 'zod';

import { MAX_CHARACTERS_MSG } from 'constants/schema-values';

export const tagSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'O nome da tag é obrigatório' })
    .max(20, { message: MAX_CHARACTERS_MSG })
    .regex(/^\w+$/, {
      message: 'A tag deve conter apenas letras, números e underline'
    })
    .transform((tag) => `#${tag}`)
});

export const createLiveSchema = z.object({
  title: z
    .string()
    .nonempty({
      message: 'O título é obrigatório'
    })
    .max(50, {
      message: MAX_CHARACTERS_MSG
    }),
  description: z.string().max(300, {
    message: MAX_CHARACTERS_MSG
  }),
  tag: z.string(),
  tagList: z
    .array(tagSchema)
    .min(1, { message: 'Pelo menos 1 tag deve ser informada' })
    .max(10, { message: 'Você chegou no limite de tags' })
});
