import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { dividerReducer } from './state/divider/divider.reducer';
import { provideEffects } from '@ngrx/effects';
import { DividerEffects } from './state/divider/divider.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({ name: 'divider', reducer: dividerReducer }),
    provideEffects([DividerEffects])
],
};
