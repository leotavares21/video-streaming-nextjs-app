import { combineReducers } from 'redux';

import livesReducer from 'store/reducers/lives';
import userReducer from 'store/reducers/user';
import videosReducer from 'store/reducers/videos';

export default combineReducers({
  videos: videosReducer,
  lives: livesReducer,
  user: userReducer
});
