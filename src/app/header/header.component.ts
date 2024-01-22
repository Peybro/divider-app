import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DividerService} from '../services/divider.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private divider = inject(DividerService)

  get Divider() {
    return this.divider;
  }
}
