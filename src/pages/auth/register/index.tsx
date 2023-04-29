import Link from 'next/link';

import { Layout } from 'components/Layout';

function RegisterPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center max-w-md mx-auto w-screen lg:px-6 sm:px-4 px-2 py-8 flex-col rounded-2xl bg-white">
          <h1 className="text-3xl text-black font-medium mb-6">Criar conta</h1>
          <form className="flex flex-col justify-center items-center w-full">
            <input type="text" placeholder="Nome" className="input-auth" />
            <input type="text" placeholder="Sobrenome" className="input-auth" />
            <input type="email" placeholder="E-mail" className="input-auth" />
            <input type="password" placeholder="Senha" className="input-auth" />

            <button className="btn btn-black w-full my-6">Criar conta</button>

            <Link
              href="/auth/sign-in"
              className="btn btn-primary text-center w-full"
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
