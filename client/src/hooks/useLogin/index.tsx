import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from 'schemas/loginSchema';
import { z } from 'zod';

type LoginData = z.infer<typeof loginSchema>;

export function useLogin() {
  const loginForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  });

  const { handleSubmit } = loginForm;

  const handleLoginSubmit = handleSubmit;

  function onLoginSubmit(data: LoginData) {
    console.log(data);
  }

  return {
    loginForm,
    onLoginSubmit,
    handleLoginSubmit
  };
}
