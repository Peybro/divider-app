import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  WritableSignal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-divider-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider-item.component.html',
  styleUrl: './divider-item.component.scss',
})
export class DividerItemComponent {
  @Input() divider!: WritableSignal<number>;
  @Input() item!: number;

  @Output() dividerChange = new EventEmitter<{ newValue: number }>();

  isDividable = computed(() => this.item % this.divider() === 0);
}
