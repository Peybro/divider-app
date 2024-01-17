import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { DividerItemComponent } from '../divider-item/divider-item.component';
import { DividerStore } from './../divider.store';

@Component({
  selector: 'app-divider-list',
  standalone: true,
  imports: [CommonModule, DividerItemComponent],
  templateUrl: './divider-list.component.html',
  styleUrl: './divider-list.component.scss',
  providers: [DividerStore],
})
export class DividerListComponent {
  store = new DividerStore();
  @Input() list!: number[];
}
