import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerItemComponent } from '../divider-item/divider-item.component';

@Component({
  selector: 'app-divider-list',
  standalone: true,
  imports: [CommonModule, DividerItemComponent],
  templateUrl: './divider-list.component.html',
  styleUrl: './divider-list.component.scss',
})
export class DividerListComponent {
  list = Array.from({ length: 20 }, (_, i) => i + 1);
}
