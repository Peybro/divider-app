import { Store } from '@ngrx/store';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { increment, decrement } from '../state/divider/divider.actions';
// import { selectDividerValue } from '../state/divider/divider.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private store = inject(Store);
  divider$: Observable<number>;

  constructor() {
    this.divider$ = this.store.select("divider");
  }

  public increase() {
    this.store.dispatch(increment());
  }

  public decrease() {
    this.store.dispatch(decrement());
  }
}
