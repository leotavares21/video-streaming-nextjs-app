import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout } from 'components/Layout';

const SignInPage = () => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    router.push('https://accounts.google.com/login');
  };

  const handleFacebookLogin = () => {
    router.push('https://www.facebook.com/login');
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center max-w-md mx-auto w-screen lg:px-6 sm:px-4 px-2 py-8 flex-col rounded-xl bg-white">
          <h1 className="text-3xl text-black font-medium mb-6">Entrar</h1>
          <form className="flex flex-col justify-center items-center w-full">
            <input type="email" placeholder="E-mail" className="input-auth" />
            <input type="password" placeholder="Senha" className="input-auth" />

            <button className="py-3 w-full bg-black text-white font-medium rounded-full my-6 hover:brightness-90">
              Entrar
            </button>

            <div className="flex justify-between gap-3 w-full">
              <button
                type="button"
                className="btn w-full bg-blue-500 my-2"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
              <button
                type="button"
                className="btn w-full bg-blue-800 my-2"
                onClick={handleFacebookLogin}
              >
                Facebook
              </button>
            </div>

            <Link href="#" className="text-black my-2 hover:underline">
              Esqueci a senha
            </Link>

            <Link
              href="/auth/register"
              className="btn btn-primary text-center w-full mt-4"
            >
              Criar conta
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;
