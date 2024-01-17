import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DividerListComponent } from './divider-list/divider-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, DividerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  list = signal(Array.from({ length: 20 }, (_, i) => i + 1));
  // divider = signal(4);

  // public increase() {
  //   this.divider.update((value) => value + 1);
  // }

  // public decrease() {
  //   this.divider.update((value) => value - 1);
  // }
}
