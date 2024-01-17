import { Component } from '@angular/core';
import { DividerStore } from './../divider.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [DividerStore],
})
export class HeaderComponent {
  store = new DividerStore();

  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }

  set(value: number) {
    this.store.set(value);
  }
}
