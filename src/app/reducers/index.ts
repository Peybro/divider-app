import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { dividerReducer } from '../state/divider/divider.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  divider: dividerReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
