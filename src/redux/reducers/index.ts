/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { Dispatch, combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from '../../utils/types/injector-typings';

import themeSlice from './theme';
import minCostSlice from './minCost';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error

  return combineReducers({
    ...injectedReducers,
    theme: themeSlice.reducer,
    minCost: minCostSlice.reducer,
  });
}

export const onUserDataClean = (dispatch: Dispatch) => {
  dispatch(themeSlice.actions.resetState());
  dispatch(minCostSlice.actions.resetState());
};
