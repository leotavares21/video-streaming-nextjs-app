import { Reducer } from 'redux';

import { VideosState } from 'store/types';

const initial_state: VideosState = {
  data: [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: true,
      total_views: 5634,
      viewers: 1520,
      channel: 'Channel 1',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      total_views: 7453,
      viewers: 840,
      channel: 'Channel 2',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      total_views: 2864,
      viewers: 510,
      channel: 'Channel 3',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 4,
      title: 'Video 4',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      total_views: 3546,
      viewers: 720,
      channel: 'Channel 4',
      channel_img: 'https://source.unsplash.com/random/200x200?person'
    }
  ]
};

const videosReducer: Reducer<VideosState> = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default videosReducer;
