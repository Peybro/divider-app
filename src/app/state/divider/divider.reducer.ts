import { createReducer, on } from '@ngrx/store';
import { increment, decrement, set } from './divider.actions';
import { isPlatformBrowser } from '@angular/common';

export interface DividerState {
  divider: number;
}

export const initialState: DividerState = {
  divider: 4,
};

export const dividerReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, divider: state.divider + 1 })),
  on(decrement, (state) => ({ ...state, divider: state.divider - 1 })),
  on(set, (state, { payload }) => ({ ...state, divider: payload }))
);
