import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { set } from '../state/divider/divider.actions';
import { AppState } from '../state/app.state';
import { selectDividerValue } from '../state/divider/divider.selector';

@Component({
  selector: 'app-divider-item',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './divider-item.component.html',
  styleUrl: './divider-item.component.scss',
})
export class DividerItemComponent {
  @Input() nr!: number;
  divider$: Observable<number>;

  constructor(private store: Store<AppState>) {
    // this.divider$ = store.select(state => state.divider.divider);
    this.divider$ = store.select(selectDividerValue);
  }

  setDivider(newValue: number) {
    this.store.dispatch(set({ payload: newValue }));
  }
}
