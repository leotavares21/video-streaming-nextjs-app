import Link from 'next/link';

import { Profile } from 'store/@types';

type CardProps = {
  imgSize: string;
  profile: Profile;
};

export function Card({ imgSize, profile }: CardProps) {
  return (
    <figure className="flex items-center gap-6">
      <Link href={`/${profile.slug}`} className="flex items-center gap-6">
        <img
          src={profile.profileImg}
          alt={profile.name}
          className={`${imgSize} rounded-full border-4 border-primary`}
        />
        <figcaption className="text-xl font-medium">{profile.name}</figcaption>
      </Link>
      <span className="text-gray-200">{profile.followers} seguidores</span>
    </figure>
  );
}
