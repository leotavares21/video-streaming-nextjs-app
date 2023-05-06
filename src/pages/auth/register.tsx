import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from 'schemas/registerSchema';
import { z } from 'zod';

import { Button } from 'components/Button';
import { Form } from 'components/Form';

type RegisterData = z.infer<typeof registerSchema>;

function RegisterPage() {
  const registerForm = useForm<RegisterData>({
    resolver: zodResolver(registerSchema)
  });

  const { handleSubmit, reset } = registerForm;

  function onRegisterSubmit(data: RegisterData) {
    console.log(data);
    reset();
  }

  return (
    <Form.Container>
      <Form.Wrapper>
        <h1 className="text-3xl text-black font-medium mb-6">Criar conta</h1>
        <FormProvider {...registerForm}>
          <form
            onSubmit={handleSubmit(onRegisterSubmit)}
            className="flex flex-col justify-center gap-4 items-center w-full"
          >
            <Form.Field>
              <Form.Input name="name" placeholder="Nome" variant="gray-style" />
              <Form.ErrorMessage field="name" />
            </Form.Field>

            <Form.Field>
              <Form.Input
                name="email"
                placeholder="E-mail"
                type="email"
                variant="gray-style"
              />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Input
                name="password"
                placeholder="Senha"
                type="password"
                variant="gray-style"
              />
              <Form.ErrorMessage field="password" />
            </Form.Field>

            <Form.Field>
              <Form.Input
                name="confirmPassword"
                placeholder="Confirmar senha"
                type="password"
                variant="gray-style"
              />
              <Form.ErrorMessage field="confirmPassword" />
            </Form.Field>

            <Button type="submit" variant="black" className="w-full">
              Criar conta
            </Button>
            <span className="text-gray-500">ou</span>
            <Button href="/auth/login" className="w-full">
              Entrar
            </Button>
          </form>
        </FormProvider>
      </Form.Wrapper>
    </Form.Container>
  );
}

export default RegisterPage;
