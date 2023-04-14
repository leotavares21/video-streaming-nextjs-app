import { Reducer } from 'redux';

import { tabActions, TabState } from 'store/types';

const initial_state: TabState = {
  activeTab: 1
};

const tabReducer: Reducer<TabState> = (state = initial_state, action) => {
  switch (action.type) {
    case tabActions.SET_CURRENT_TAB:
      return {
        ...state,
        activeTab: action.payload.tabNumber
      };
    default:
      return state;
  }
};

export default tabReducer;
