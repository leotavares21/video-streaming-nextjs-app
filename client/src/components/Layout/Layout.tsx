import { useRouter } from 'next/router';

import { Header } from 'components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const router = useRouter();

  //Check if the route is the login or registration page.
  const hideHeader =
    router.pathname === '/auth/login' || router.pathname === '/auth/register';

  return (
    <>
      {!hideHeader && <Header />}
      <main className="container max-w-screen-xl px-4 mx-auto">{children}</main>
    </>
  );
}
