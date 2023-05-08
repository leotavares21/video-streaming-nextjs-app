import Link from 'next/link';

import { User } from 'store/@types';

type UserInfo = {
  user: User;
};

export function UserInfo({ user }: UserInfo) {
  return (
    <Link
      href="/settings"
      className="flex items-center gap-3"
      data-testid="btn-profile"
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="rounded-full w-12 h-12 object-cover"
      />
      <span className="font-medium">{user.name}</span>
    </Link>
  );
}
