import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() divider: number = 4;

  @Output() dividerIncrease = new EventEmitter();
  @Output() dividerDecrease = new EventEmitter();

  public increase() {
    this.dividerIncrease.emit();
  }

  public decrease() {
    this.dividerDecrease.emit();
  }
}
