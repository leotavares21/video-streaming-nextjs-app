import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';

import Button from 'components/Button';

import { PagesMapState, User } from 'store/types';

type ProfileProps = {
  user: User;
};

function Profile({ user }: ProfileProps) {
  const {
    isVisible,
    containerRef,
    toggleRef,
    handleClick,
    handleClickOutside
  } = useClickOutsideUtils();

  useClickOutside(containerRef, toggleRef, handleClickOutside);

  if (user) {
    return (
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

        <div
          className="cursor-pointer p-1 hover:bg-gray-500 rounded-full"
          ref={toggleRef}
          onClick={() => handleClick(!isVisible)}
        >
          <BsThreeDotsVertical />
        </div>

        {isVisible && (
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
    );
  }
  return (
    <Button href="/auth/sign-in">
      <FaRegUserCircle className="text-xl" />
      <span>Entrar</span>
    </Button>
  );
}

const mapStateToProps = (state: PagesMapState) => ({
  user: state.user.data
});

export default connect(mapStateToProps)(Profile);
