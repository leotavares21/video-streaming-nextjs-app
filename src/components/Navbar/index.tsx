import Link from 'next/link';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoVideocam } from 'react-icons/io5';
import { connect } from 'react-redux';

import { PagesMapState, User } from 'store/types';

type NavBarProps = {
  user: User;
};

function NavBar({ user }: NavBarProps) {
  const [openNav, setOpenNav] = useState(false);

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
          className="rounded-xl pl-10 pr-4 py-3 input-outline"
          placeholder="Buscar..."
        />
      </form>

      <div className="md:w-1/3 sm:w-2/10 flex items-center justify-end">
        {!user && (
          <Link
            href="/auth/sign-in"
            className="btn btn-secondary flex items-center gap-2"
            data-testid="btn-sign-in"
          >
            <FaRegUserCircle className="text-xl" />
            <span> Entrar</span>
          </Link>
        )}

        {user && (
          <div className="flex items-center gap-3 relative">
            <Link
              href="/settings/profile"
              className="flex items-center gap-3"
              data-testid="btn-profile"
            >
              <img
                src={user.img}
                alt={user.name}
                className="rounded-full w-12 h-12 object-cover"
              />
              <span className="font-medium">{user.name}</span>
            </Link>
            <BsThreeDotsVertical
              className="hover:text-gray cursor-pointer"
              onClick={() => setOpenNav(!openNav)}
            />
            {openNav && (
              <div className="bg-white px-2 py-2 absolute w-full -bottom-full rounded-md ">
                <button className="px-4 bg-accent rounded-lg hover:brightness-90">
                  Sair
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  user: state.user.data
});

export default connect(mapStateToProps)(NavBar);
