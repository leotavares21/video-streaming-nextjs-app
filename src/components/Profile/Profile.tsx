import { FaRegUserCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';

import { Button } from 'components/Button';

import { PagesMapState, User } from 'store/types';

import { ProfileMenu, ProfileToggleButton, UserInfo } from './components';

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
        <UserInfo user={user} />

        <ProfileToggleButton
          toggleRef={toggleRef}
          isVisible={isVisible}
          handleClick={handleClick}
        />

        <ProfileMenu isVisible={isVisible} />
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

const ProfileComponent = connect(mapStateToProps)(Profile);

export { ProfileComponent as Profile };
