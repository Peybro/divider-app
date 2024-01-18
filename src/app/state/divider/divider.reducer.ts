import { createReducer, on } from '@ngrx/store';
import { increment, decrement, set } from './divider.actions';

export interface DividerState {
  value: number;
}

export const initialState = { value: 4 };

export const dividerReducer = createReducer(
  initialState,
  on(increment, (state) => ({ value: state.value + 1 })),
  on(decrement, (state) => ({ value: state.value - 1 })),
  on(set, (state, { payload }) => ({ value: payload }))
);
