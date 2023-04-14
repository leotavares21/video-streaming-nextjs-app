// import { Dispatch } from 'redux';
import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';

import { tabActions } from 'store/types';

export function setCurrentTab(tabNumber: number) {
  return (dispatch: Dispatch) => {
    return dispatch(action(tabActions.SET_CURRENT_TAB, { tabNumber }));
  };
}
