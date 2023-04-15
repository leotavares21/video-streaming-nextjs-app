import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { IoVideocam } from 'react-icons/io5';

export default function NavBar() {
  return (
    <header className="container mx-auto px-4 max-w-screen-xl flex items-center gap-2 justify-between h-20 mb-8">
      <Link href="/" className="md:w-1/3 sm:w-2/10">
        <IoVideocam className="text-secondary text-[2rem]" />
        <span className="font-medium">Início</span>
      </Link>

      <form className="md:w-1/2 sm:w-6/10 flex items-center justify-center relative">
        <FiSearch className="text-black absolute left-3 cursor-pointer text-xl" />
        <input
          type="text"
          className="text-black rounded-xl pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Buscar..."
        />
      </form>

      <div className="md:w-1/3 sm:w-2/10 flex items-center justify-end">
        <Link href="/auth/sign-in" className="btn btn-secondary">
          Entrar
        </Link>
      </div>
    </header>
  );
}
