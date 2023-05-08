import Link from 'next/link';

import { Profile } from 'store/@types';

import { PreviewFigure } from './components/PreviewFigure';

type ProfilePreviewProps = {
  profiles: Profile[];
  type?: 'search';
};

export function ProfilePreview({ profiles, type }: ProfilePreviewProps) {
  if (type === 'search') {
    return (
      <>
        {profiles.map((profile) => (
          <Link
            href={`/${profile.slug}`}
            className="flex mb-2 p-1 hover:bg-gray-100"
            key={profile.id}
          >
            <PreviewFigure>
              <img
                src={profile.profileImg}
                alt={profile.name}
                className="rounded-full w-10 h-10"
              />

              <figcaption className="text-gray-500 text-lg">
                {profile.name}
              </figcaption>
            </PreviewFigure>
          </Link>
        ))}
      </>
    );
  }
  return (
    <div className="flex flex-wrap md:justify-between md:gap-4 gap-12">
      {profiles.map((profile) => (
        <Link
          href={`/${profile.slug}`}
          className="flex mb-2 p-2 rounded-xl bg-gray-500 bg-opacity-25 hover:bg-gray-700 hover:bg-opacity-50"
          key={profile.id}
        >
          <PreviewFigure>
            <img
              src={profile.profileImg}
              alt={profile.name}
              className="rounded-full w-20 h-20"
            />

            <figcaption className="text-gray-100 text-lg font-medium">
              {profile.name}
            </figcaption>
          </PreviewFigure>
        </Link>
      ))}
    </div>
  );
}
