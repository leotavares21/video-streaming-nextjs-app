import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

export default function NavBar() {
  return (
    <header className="container mx-auto px-4 max-w-screen-xl flex items-center gap-2 justify-between h-20">
      <div className="md:w-1/3 sm:w-0" />

      <form className="md:w-1/2 sm:w-3/4 flex items-center justify-center relative">
        <FiSearch className="text-black absolute left-3 cursor-pointer text-xl" />
        <input
          type="text"
          className="text-black rounded-xl pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Buscar..."
        />
      </form>

      <div className="md:w-1/3 flex items-center justify-end">
        <Link
          href="/sign-in"
          className="text-white bg-secondary rounded-2xl hover:brightness-90 px-6 py-2 text-lg font-medium"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}
