import { Logo } from 'components/Logo';
import { Profile } from 'components/Profile';
import { Search } from 'components/Search';

export function Header() {
  return (
    <header className="container mx-auto px-4 max-w-screen-xl flex items-center gap-2 justify-between h-20 mb-8 sticky z-50">
      <Logo />

      <Search />

      <Profile />
    </header>
  );
}
