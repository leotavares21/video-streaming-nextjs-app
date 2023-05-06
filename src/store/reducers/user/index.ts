import { Reducer } from 'redux';

import { UserState } from 'store/types';

const INITIAL_STATE: UserState = {
  data: {
    id: 1234,
    name: 'John Silva',
    avatar: 'https://source.unsplash.com/random/200x200?man',
    password: '123456',
    email: 'john@silva.com.br',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum atque optio, ducimus fugit commodi!',
    myChannel: {
      followers: 12354,
      videos: [
        {
          id: 1,
          title: 'Video 1',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          live: false,
          totalViews: 5634,
          viewers: 1520,
          channel: 'Channel 1',
          channelImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 2,
          title: 'Video 2',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          live: false,
          totalViews: 7453,
          viewers: 840,
          channel: 'Channel 2',
          channelImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 3,
          title: 'Video 3',
          thumbnail: 'https://source.unsplash.com/random/500x400?cars',
          live: false,
          totalViews: 2864,
          viewers: 510,
          channel: 'Channel 3',
          channelImg: 'https://source.unsplash.com/random/200x200?person'
        }
      ]
    },
    following: {
      channels: [
        {
          id: 1,
          name: 'channel 1',
          channelImg: 'https://source.unsplash.com/random/200x200?lyon',
          slug: 'channel1'
        },
        {
          id: 2,
          name: 'channel 2',
          channelImg: 'https://source.unsplash.com/random/200x200?eagle',
          slug: 'channel2'
        },
        {
          id: 3,
          name: 'channel 3',
          channelImg: 'https://source.unsplash.com/random/200x200?game',
          slug: 'channel3'
        },
        {
          id: 4,
          name: 'channel 4',
          channelImg: 'https://source.unsplash.com/random/200x200?sport',
          slug: 'channel4'
        },
        {
          id: 5,
          name: 'channel 5',
          channelImg: 'https://source.unsplash.com/random/200x200?tech',
          slug: 'channel5'
        }
      ],
      videos: [
        {
          id: 1,
          title: 'Video 1',
          thumbnail: 'https://source.unsplash.com/random/500x400?animal',
          live: true,
          totalViews: 5634,
          viewers: 1520,
          channel: 'Channel 1',
          channelImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 2,
          title: 'Video 2',
          thumbnail: 'https://source.unsplash.com/random/500x400?animal',
          live: true,
          totalViews: 7453,
          viewers: 840,
          channel: 'Channel 2',
          channelImg: 'https://source.unsplash.com/random/200x200?person'
        },
        {
          id: 3,
          title: 'Video 3',
          thumbnail: 'https://source.unsplash.com/random/500x400?animal',
          live: true,
          totalViews: 2864,
          viewers: 510,
          channel: 'Channel 3',
          channelImg: 'https://source.unsplash.com/random/200x200?person'
        }
      ]
    }
  }
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
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
