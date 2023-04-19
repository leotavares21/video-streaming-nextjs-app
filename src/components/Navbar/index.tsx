import Link from 'next/link';
import { useRef, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoVideocam } from 'react-icons/io5';
import { connect } from 'react-redux';

import { useClickInOut } from 'hooks';

import Search from 'components/Search';

import { PagesMapState, User } from 'store/types';

type NavBarProps = {
  user: User;
};

function NavBar({ user }: NavBarProps) {
  const [showOptions, setShowOptions] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  function handleClickOutside() {
    setShowOptions(false);
  }

  useClickInOut(containerRef, toggleRef, handleClickOutside);

  return (
    <header className="container mx-auto px-4 max-w-screen-xl flex items-center gap-2 justify-between h-20 mb-8 sticky z-50">
      <Link href="/" className="md:w-1/3 sm:w-2/10">
        <IoVideocam className="text-secondary text-[2rem]" />
        <span className="font-medium">Início</span>
      </Link>

      <Search className="md:w-1/2 sm:w-6/10" />

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
          <div className="flex items-center gap-3 relative" ref={containerRef}>
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

            <div className="cursor-pointer" ref={toggleRef}>
              <BsThreeDotsVertical
                className="hover:text-gray-200"
                onClick={() => setShowOptions(!showOptions)}
              />
            </div>
            {showOptions && (
              <div className="bg-white px-2 py-2 absolute top-full mt-1 flex flex-col gap-2 w-full rounded-md ">
                <Link
                  href="/settings/profile"
                  className="text-gray-300 hover:text-black"
                >
                  Configurações
                </Link>
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
