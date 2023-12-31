import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'massoterapeuta-elisabete-sidenav-button-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav-button-menu.component.html',
  styleUrl: './sidenav-button-menu.component.scss',
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({opacity: 0})),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px',
      })),
      transition('* => *', [animate('0.2s')]),
    ])
  ],
})
export class SidenavButtonMenuComponent {
  @Input() scrollAtTop: boolean;
  @Input() isHamburguer: boolean;
  @Output() changed: EventEmitter<boolean>;

  constructor() {
    this.isHamburguer = true;
    this.scrollAtTop = true;
    this.changed = new EventEmitter();
  }

  toggleIcon(): void {
    this.changed.emit(this.isHamburguer);
  }
}
