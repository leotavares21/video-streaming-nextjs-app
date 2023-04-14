import { combineReducers } from 'redux';

import tabReducer from './tab';
import videosReducer from './videos';

export default combineReducers({
  tab: tabReducer,
  videos: videosReducer
});
