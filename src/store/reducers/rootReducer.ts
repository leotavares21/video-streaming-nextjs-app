import { combineReducers } from 'redux';

import channelReducer from 'store/reducers/channel';
import livesReducer from 'store/reducers/lives';
import userReducer from 'store/reducers/user';
import videosReducer from 'store/reducers/videos';

export default combineReducers({
  channel: channelReducer,
  videos: videosReducer,
  lives: livesReducer,
  user: userReducer
});
