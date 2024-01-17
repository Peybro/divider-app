import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { DividerStore } from './../divider.store';

@Component({
  selector: 'app-divider-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider-item.component.html',
  styleUrl: './divider-item.component.scss',
  providers: [DividerStore],
})
export class DividerItemComponent {
  @Input() item!: number;

  store = inject(DividerStore);

  setDivider = (newValue: number) => {
    this.store.set(newValue)
    console.log('setDivider', newValue);
  };

  isDividable = computed(() => this.item % this.store.divider() === 0);
}
