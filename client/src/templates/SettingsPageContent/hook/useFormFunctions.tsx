import { useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';

import { createLiveSchema, tagSchema } from 'schemas/createLiveSchema';
import { ZodFormattedError, z } from 'zod';

type CreateLiveData = z.infer<typeof createLiveSchema>;

type ZodError = ZodFormattedError<
  {
    name: string;
  },
  string
>;

type createLiveFormProps = UseFormReturn<CreateLiveData>;

export function useFormFunctions(createLiveForm: createLiveFormProps) {
  const [errorMessage, setErrorMessage] = useState<ZodError | null>();

  const { control, watch } = createLiveForm;

  const { fields, remove, append } = useFieldArray({
    name: 'tagList',
    control
  });

  async function addNewTag() {
    const isValid = await tagSchema.safeParseAsync({ name: watch('tag') });
    if (isValid.success) {
      append({ name: watch('tag') });
      setErrorMessage(null);
    } else {
      const error = isValid.error.format();

      setErrorMessage(error);
    }
  }
  return {
    errorMessage,
    addNewTag,
    fields,
    remove,
    watch
  };
}
