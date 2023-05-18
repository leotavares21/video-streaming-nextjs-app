import { z } from 'zod';

import { MAX_CHARACTERS_MSG } from 'constants/schema-values';

export const searchSchema = z.object({
  searchTerm: z
    .string()
    .nonempty({
      message: 'O termo de busca está vazio'
    })
    .max(200, {
      message: MAX_CHARACTERS_MSG
    })
});
