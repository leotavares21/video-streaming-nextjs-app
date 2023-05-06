import { Reducer } from 'redux';

import { VideosState } from 'store/types';

const INITIAL_STATE: VideosState = {
  data: [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: true,
      totalViews: 5634,
      viewers: 1520,
      channel: 'Channel 1',
      channelImg: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      totalViews: 7453,
      viewers: 840,
      channel: 'Channel 2',
      channelImg: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      totalViews: 2864,
      viewers: 510,
      channel: 'Channel 3',
      channelImg: 'https://source.unsplash.com/random/200x200?person'
    },
    {
      id: 4,
      title: 'Video 4',
      thumbnail: 'https://source.unsplash.com/random/500x400?video',
      live: false,
      totalViews: 3546,
      viewers: 720,
      channel: 'Channel 4',
      channelImg: 'https://source.unsplash.com/random/200x200?person'
    }
  ]
};

const videosReducer: Reducer<VideosState> = (state = INITIAL_STATE, action) => {
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
