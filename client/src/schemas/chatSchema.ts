import { z } from 'zod';

import { MAX_CHARACTERS_MSG } from 'constants/schema-values';

export const chatSchema = z.object({
  chatText: z
    .string()
    .nonempty({ message: 'A mensagem está vazia' })
    .max(200, MAX_CHARACTERS_MSG)
});
