import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { DividerService } from '../services/divider.service';

@Component({
  selector: 'app-divider-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider-item.component.html',
  styleUrl: './divider-item.component.scss',
})
export class DividerItemComponent {
  @Input() nr!: number;
  private divider = inject(DividerService)

  get Divider() {
    return this.divider;
  }
}
