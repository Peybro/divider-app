import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  WritableSignal,
  computed,
  inject,
} from '@angular/core';
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
  store = inject(DividerStore);

  @Input() item!: number;

  isDividable = computed(() => this.item % this.store.divider() === 0);
}
