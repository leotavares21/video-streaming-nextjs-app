import { FaRegUserCircle } from 'react-icons/fa';

import { useClickOutside, useClickOutsideUtils } from 'hooks/useClickOutside';

import { Button } from 'components/Button';

import { useUserStore } from 'store';

import { ProfileMenu, ProfileToggleButton, UserInfo } from './components';

export function Profile() {
  const {
    state: { user }
  } = useUserStore();

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
    <Button href="/auth/login">
      <FaRegUserCircle className="text-xl" />
      <span>Entrar</span>
    </Button>
  );
}
