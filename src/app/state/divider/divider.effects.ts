import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, set } from './divider.actions';
import { tap } from 'rxjs';

@Injectable()
export class DividerEffects {
  constructor(private actions$: Actions) {}

  setLocalStorage(value: number) {
    try {
      localStorage.setItem('divider', value.toString());
    } catch (error) {
      console.error('Failed to set divider in localStorage', error);
    }
  }

  increment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment),
        tap(() =>
          this.setLocalStorage(
            parseInt(localStorage.getItem('divider') ?? '0') + 1
          )
        )
      ),
    { dispatch: false }
  );

  decrement$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(decrement),
        tap(() =>
          this.setLocalStorage(
            parseInt(localStorage.getItem('divider') ?? '0') - 1
          )
        )
      ),
    { dispatch: false }
  );

  setDivider$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(set),
        tap((action) => this.setLocalStorage(action.payload))
      ),
    { dispatch: false }
  );
}
