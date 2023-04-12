import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="container mx-auto px-4 max-w-screen-xl flex items-center justify-between h-20">
      <div className="w-1/3" />

      <form className="w-1/2 flex items-center justify-center relative">
        <div className="text-black absolute left-4 cursor-pointer">@</div>
        <input
          type="text"
          className="text-black rounded-[16px] pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Buscar..."
        />
      </form>

      <div className="w-1/3 flex items-center justify-end">
        <Link
          href="/sign-in"
          className="text-white hover:text-gray px-3 py-2 text-lg font-medium"
        >
          <span>Icon</span>
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
}
