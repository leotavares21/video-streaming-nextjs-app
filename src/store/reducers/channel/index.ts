import { Reducer } from 'redux';

import { ChannelState } from 'store/types';

const initial_state: ChannelState = {
  status: {
    live: true
  },
  data: {
    id: 1234,
    name: 'User`s Channel',
    channel_img: 'https://source.unsplash.com/random/200x200?art',
    followers: 8456,
    videos: [
      {
        id: 1,
        title: 'Video 1',
        thumbnail: 'https://source.unsplash.com/random/500x400?design',
        total_views: 5634,
        viewers: 1520,
        channel: 'Channel 1',
        channel_img: 'https://source.unsplash.com/random/200x200?person'
      },
      {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://source.unsplash.com/random/500x400?design',
        total_views: 7453,
        viewers: 840,
        channel: 'Channel 2',
        channel_img: 'https://source.unsplash.com/random/200x200?person'
      },
      {
        id: 3,
        title: 'Video 3',
        thumbnail: 'https://source.unsplash.com/random/500x400?design',
        total_views: 2864,
        viewers: 510,
        channel: 'Channel 3',
        channel_img: 'https://source.unsplash.com/random/200x200?person'
      }
    ]
  }
};

const channelReducer: Reducer<ChannelState> = (
  state = initial_state,
  action
) => {
  switch (action.type) {
    case 'FETCH_CHANNEL':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default channelReducer;
