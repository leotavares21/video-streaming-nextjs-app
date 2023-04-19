import { Reducer } from 'redux';

import { UserState } from 'store/types';

const initial_state: UserState = {
  data: {
    id: 1234,
    name: 'John',
    last_name: 'Silva',
    img: 'https://source.unsplash.com/random/200x200?man',
    my_channel: {
      name: 'John Channel',
      followers: 12354,
      videos: [
        {
          id: 1,
          title: 'Video 1',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          live: false,
          total_views: 5634,
          viewers: 1520,
          channel: 'Channel 1',
          channel_img: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 2,
          title: 'Video 2',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          live: false,
          total_views: 7453,
          viewers: 840,
          channel: 'Channel 2',
          channel_img: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 3,
          title: 'Video 3',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          live: false,
          total_views: 2864,
          viewers: 510,
          channel: 'Channel 3',
          channel_img: 'https://source.unsplash.com/random/200x200?person'
        }
      ]
    },
    following: {
      channels: [
        {
          name: 'wild life',
          img: 'https://source.unsplash.com/random/200x200?lyon'
        }
      ],
      videos: [
        {
          id: 1,
          title: 'Video 1',
          thumbnail: 'https://source.unsplash.com/random/500x400?animal',
          live: true,
          total_views: 5634,
          viewers: 1520,
          channel: 'Channel 1',
          channel_img: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 2,
          title: 'Video 2',
          thumbnail: 'https://source.unsplash.com/random/500x400?animal',
          live: true,
          total_views: 7453,
          viewers: 840,
          channel: 'Channel 2',
          channel_img: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 3,
          title: 'Video 3',
          thumbnail: 'https://source.unsplash.com/random/500x400?animal',
          live: true,
          total_views: 2864,
          viewers: 510,
          channel: 'Channel 3',
          channel_img: 'https://source.unsplash.com/random/200x200?person'
        }
      ]
    }
  }
};

const userReducer: Reducer<UserState> = (state = initial_state, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default userReducer;
