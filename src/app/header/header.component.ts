import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { increment, decrement } from '../state/divider/divider.actions';
import { selectDividerValue } from '../state/divider/divider.selector';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  divider$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.divider$ = store.select(selectDividerValue);
  }

  public increase() {
    this.store.dispatch(increment());
  }

  public decrease() {
    this.store.dispatch(decrement());
  }
}
