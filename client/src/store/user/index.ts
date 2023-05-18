import { create } from 'zustand';

import { User } from '../@types';

type StoreProps = {
  state: { user: User };
  actions: { fetchUser: () => void };
};

export const useUserStore = create<StoreProps>(() => ({
  state: {
    user: {
      id: 1234,
      name: 'John Silva',
      avatar: 'https://source.unsplash.com/random/200x200?person',
      password: '123456',
      email: 'john@silva.com.br',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum atque optio, ducimus fugit commodi!',
      followers: 12354,
      myVideos: [
        {
          id: 1,
          title: 'Video 1',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
          live: false,
          totalViews: 5634,
          viewers: 1520,
          profile: 'Profile 1',
          profileImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 2,
          title: 'Video 2',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
          live: false,
          totalViews: 7453,
          viewers: 840,
          profile: 'Profile 2',
          profileImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 3,
          title: 'Video 3',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
          live: false,
          totalViews: 2864,
          viewers: 510,
          profile: 'Profile 3',
          profileImg: 'https://source.unsplash.com/random/200x200?person'
        }
      ],
      following: {
        profiles: [
          {
            id: 1,
            name: 'profile 1',
            profileImg: 'https://source.unsplash.com/random/200x200?lyon',
            slug: 'profile1'
          },
          {
            id: 2,
            name: 'profile 2',
            profileImg: 'https://source.unsplash.com/random/200x200?eagle',
            slug: 'profile2'
          },
          {
            id: 3,
            name: 'profile 3',
            profileImg: 'https://source.unsplash.com/random/200x200?game',
            slug: 'profile3'
          },
          {
            id: 4,
            name: 'profile 4',
            profileImg: 'https://source.unsplash.com/random/200x200?sport',
            slug: 'profile4'
          },
          {
            id: 5,
            name: 'profile 5',
            profileImg: 'https://source.unsplash.com/random/200x200?tech',
            slug: 'profile5'
          }
        ],
        videos: [
          {
            id: 1,
            title: 'Video 1',
            thumbnail: 'https://source.unsplash.com/random/500x400?animal',
            url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
            live: true,
            totalViews: 5634,
            viewers: 1520,
            profile: 'Profile 1',
            profileImg: 'https://source.unsplash.com/random/200x200?person'
          },
          {
            id: 2,
            title: 'Video 2',
            thumbnail: 'https://source.unsplash.com/random/500x400?animal',
            url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
            live: true,
            totalViews: 7453,
            viewers: 840,
            profile: 'Profile 2',
            profileImg: 'https://source.unsplash.com/random/200x200?person'
          },
          {
            id: 3,
            title: 'Video 3',
            thumbnail: 'https://source.unsplash.com/random/500x400?animal',
            url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
            live: true,
            totalViews: 2864,
            viewers: 510,
            profile: 'Profile 3',
            profileImg: 'https://source.unsplash.com/random/200x200?person'
          }
        ]
      }
    }
  },
  actions: {
    fetchUser: () => {
      console.log('data');
    }
  }
}));
