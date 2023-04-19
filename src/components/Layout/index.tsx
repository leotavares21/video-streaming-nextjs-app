import { useRouter } from 'next/router';

import Navbar from 'components/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  //Check if the route is the login or registration page.
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
