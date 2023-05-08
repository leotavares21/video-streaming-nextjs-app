import { create } from 'zustand';

import { Video } from '../@types';

type StoreProps = {
  state: { trendVideos: Video[] };
  actions: { fetchTrendVideos: () => void };
};

export const useTrendVideosStore = create<StoreProps>(() => ({
  state: {
    trendVideos: [
      {
        id: 1,
        title: 'Video 1',
        thumbnail: 'https://source.unsplash.com/random/500x400?video',
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
        thumbnail: 'https://source.unsplash.com/random/500x400?video',
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
        thumbnail: 'https://source.unsplash.com/random/500x400?video',
        url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
        live: false,
        totalViews: 2864,
        viewers: 510,
        profile: 'Profile 3',
        profileImg: 'https://source.unsplash.com/random/200x200?person'
      },
      {
        id: 4,
        title: 'Video 4',
        thumbnail: 'https://source.unsplash.com/random/500x400?video',
        url: 'https://www.youtube.com/watch?v=KFlVgSq77Jw',
        live: false,
        totalViews: 3546,
        viewers: 720,
        profile: 'Profile 4',
        profileImg: 'https://source.unsplash.com/random/200x200?person'
      }
    ]
  },
  actions: {
    fetchTrendVideos: () => {
      console.log('data');
    }
  }
}));
