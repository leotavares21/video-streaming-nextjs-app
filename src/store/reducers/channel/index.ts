import { Reducer } from 'redux';

import { ChannelState } from 'store/types';

const INITIAL_STATE: ChannelState = {
  status: {
    live: true
  },
  data: {
    id: 1234,
    name: 'User`s Channel',
    slug: 'userschannel',
    channelImg: 'https://source.unsplash.com/random/200x200?art',
    followers: 8456,
    videos: [
      {
        id: 1,
        title: 'Video 1',
        thumbnail: 'https://source.unsplash.com/random/500x400?design',
        totalViews: 5634,
        viewers: 1520,
        channel: 'Channel 1',
        channelImg: 'https://source.unsplash.com/random/200x200?person'
      },
      {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://source.unsplash.com/random/500x400?design',
        totalViews: 7453,
        viewers: 840,
        channel: 'Channel 2',
        channelImg: 'https://source.unsplash.com/random/200x200?person'
      },
      {
        id: 3,
        title: 'Video 3',
        thumbnail: 'https://source.unsplash.com/random/500x400?design',
        totalViews: 2864,
        viewers: 510,
        channel: 'Channel 3',
        channelImg: 'https://source.unsplash.com/random/200x200?person'
      }
    ]
  }
};

const channelReducer: Reducer<ChannelState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default channelReducer;
