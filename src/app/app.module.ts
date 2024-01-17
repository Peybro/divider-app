import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { dividerReducer } from './divider.reducer';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    StoreModule.forRoot({ divider: dividerReducer }),
  ],
  providers: [],
})
export class AppModule {}
