import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormProvider } from 'react-hook-form';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

import { useLogin } from 'hooks/useLogin';

import { Button } from 'components/Button';
import { Form } from 'components/Form';

const SignInPage = () => {
  const router = useRouter();

  const { loginForm, onLoginSubmit, handleLoginSubmit } = useLogin();

  const handleGoogleLogin = () => {
    router.push('https://accounts.google.com/login');
  };

  const handleFacebookLogin = () => {
    router.push('https://www.facebook.com/login');
  };

  return (
    <Form.Container>
      <Form.Wrapper>
        <h1 className="text-3xl text-black font-medium mb-6">Entrar</h1>
        <FormProvider {...loginForm}>
          <form
            onSubmit={handleLoginSubmit(onLoginSubmit)}
            className="flex flex-col gap-4 justify-center items-center w-full"
          >
            <Form.Field>
              <Form.Input
                variant="gray-style"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Input
                variant="gray-style"
                type="password"
                name="password"
                placeholder="Senha"
              />
              <Form.ErrorMessage field="password" />
            </Form.Field>

            <Button type="submit" variant="black" className="w-full">
              Entrar
            </Button>

            <span className="text-gray-500">ou entre com</span>

            <div className="flex justify-between gap-3 w-full">
              <button
                type="button"
                className="btn w-full bg-blue-500 my-2"
                onClick={handleGoogleLogin}
              >
                <BsGoogle />
                Google
              </button>
              <button
                type="button"
                className="btn w-full bg-blue-800 my-2"
                onClick={handleFacebookLogin}
              >
                <BsFacebook />
                Facebook
              </button>
            </div>

            <Link
              href="#"
              className="text-black hover:underline hover:text-gray-500"
            >
              Esqueci a senha
            </Link>

            <Button href="/auth/register" className="w-full">
              Criar conta
            </Button>
          </form>
        </FormProvider>
      </Form.Wrapper>
    </Form.Container>
  );
};

export default SignInPage;
