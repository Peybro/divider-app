import { createReducer, on } from "@ngrx/store";
import { increment, decrement, set } from "./divider.actions";

export const initialState = 4;

export const dividerReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    // on(set, (state, action) => state = action.value)
)