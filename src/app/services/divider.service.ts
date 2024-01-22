import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DividerService {

  #divider = signal(4)

  // effect(() => {
  //   console.log(`The current count is: ${this.#divider()}`);
  // });

  constructor() { }
  
  // value = this.#divider.asReadonly();

  value() {
    return this.#divider();
  }

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
