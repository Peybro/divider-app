import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { set } from '../state/divider/divider.actions';

@Component({
  selector: 'app-divider-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider-item.component.html',
  styleUrl: './divider-item.component.scss',
})
export class DividerItemComponent {
  @Input() nr!: number;
  private store = inject(Store);
  divider$: Observable<number>;

  constructor() {
    this.divider$ = this.store.select("divider");
  }

  setDivider(newValue: number) {
    this.store.dispatch(set({ payload: newValue }));
  }
}
