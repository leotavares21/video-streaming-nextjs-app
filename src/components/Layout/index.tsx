import { useRouter } from 'next/router';

import Navbar from 'components/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  // verifica se a rota é a página de login ou registro
  const hideNavbar =
    router.pathname === '/auth/sign-in' || router.pathname === '/auth/register';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="container max-w-screen-xl px-4 mx-auto">{children}</main>
    </>
  );
}

export default Layout;
