import { create } from 'zustand';

import { Profile } from '../@types';

type StoreProps = {
  state: {
    isLive: boolean;
    profile: Profile;
  };
  actions: {
    fetchProfile: () => void;
  };
};

export const useProfileStore = create<StoreProps>(() => ({
  state: {
    isLive: true,
    profile: {
      id: 1234,
      name: 'User`s Profile',
      slug: 'usersprofile',
      profileImg: 'https://source.unsplash.com/random/200x200?person',
      followers: 8456,
      videos: [
        {
          id: 1,
          title: 'Video 1',
          url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
          thumbnail: 'https://source.unsplash.com/random/500x400?design',
          totalViews: 5634,
          viewers: 1520,
          profile: 'Profile 1',
          profileImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 2,
          title: 'Video 2',
          url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
          thumbnail: 'https://source.unsplash.com/random/500x400?design',
          totalViews: 7453,
          viewers: 840,
          profile: 'Profile 2',
          profileImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 3,
          title: 'Video 3',
          url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
          thumbnail: 'https://source.unsplash.com/random/500x400?design',
          totalViews: 2864,
          viewers: 510,
          profile: 'Profile 3',
          profileImg: 'https://source.unsplash.com/random/200x200?person'
        }
      ]
    }
  },
  actions: {
    fetchProfile: () => {
      console.log('data');
    }
  }
}));
