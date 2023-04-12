import Link from 'next/link';

import Layout from 'components/Layout';

function RegisterPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center max-w-md mx-auto w-screen lg:px-6 sm:px-4 px-2 py-8 flex-col rounded-[24px]  bg-white">
          <h1 className="text-3xl text-black font-medium mb-6">Criar conta</h1>
          <form className="flex flex-col justify-center items-center w-full">
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-3 text-black my-2 bg-gray-100 rounded-full"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="w-full px-4 py-3 text-black my-2 bg-gray-100 rounded-full"
            />
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
              Criar conta
            </button>

            <Link
              href="sign-in"
              className="text-center w-full bg-secondary text-white font-medium py-3 hover:brightness-90 rounded-full "
            >
              Logar conta
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default RegisterPage;
