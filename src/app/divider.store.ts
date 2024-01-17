import {
  signalStore,
  withState,
  patchState,
  withMethods,
} from '@ngrx/signals';

export const DividerStore = signalStore(
  { providedIn: 'root' },
  withState({ divider: 4 }),
  withMethods(({ divider, ...store }) => ({
    increment() {
      patchState(store, { divider: divider() + 1 });
    },
    decrement() {
      patchState(store, { divider: divider() - 1 });
    },
    set(newValue: number) {
        patchState(store, { divider: newValue });
    }
  }))
);
