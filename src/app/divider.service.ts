import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DividerService {

  #divider = signal(4)

  constructor() { }
  
  value = this.#divider.asReadonly();

  // get divider() {
  //   return this.#divider();
  // }

  set(value: number) {
    this.#divider.set(value);
  }

  increment() {
    this.#divider.update(n => n + 1);
  }

  decrement() {
    this.#divider.update(n => n - 1);
  }
}
