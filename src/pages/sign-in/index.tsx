import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';

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
        <div className="flex justify-center items-center max-w-md mx-auto w-screen lg:px-6 sm:px-4 px-2 py-8 flex-col rounded-[16px]  bg-white">
          <h1 className="text-3xl text-black font-medium mb-6">Entrar</h1>
          <form className="flex flex-col justify-center items-center w-full">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 text-black my-2 bg-gray-100 rounded-full"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 text-black my-2 bg-gray-100 rounded-full"
            />

            <button className="py-3 w-full bg-black text-white font-medium rounded-full my-6 hover:brightness-90">
              Entrar
            </button>

            <div className="flex justify-between gap-3 w-full">
              <button
                type="button"
                className="w-full bg-blue-500 text-white py-3 rounded-full my-2 hover:brightness-90"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
              <button
                type="button"
                className="w-full bg-blue-800 text-white py-3 rounded-full my-2 hover:brightness-90"
                onClick={handleFacebookLogin}
              >
                Facebook
              </button>
            </div>

            <Link href="#" className="text-black my-2 hover:underline">
              Esqueci a senha
            </Link>

            <Link
              href="register"
              className="text-center w-full bg-secondary text-white font-medium py-3 mt-4 hover:brightness-90 rounded-full "
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
