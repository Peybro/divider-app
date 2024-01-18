import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { increment, decrement } from '../state/divider/divider.actions';
import { selectDividerValue } from '../state/divider/divider.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  divider$ = this.store.select(selectDividerValue);

  constructor(private store: Store) {}

  public increase() {
    this.store.dispatch(increment());
  }

  public decrease() {
    this.store.dispatch(decrement());
  }
}
