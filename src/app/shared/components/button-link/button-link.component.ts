import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'massoterapeuta-elisabete-button-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss'
})
export class ButtonLinkComponent {
  @Input() image!: string;
  @Input() url!: string;
  @Input() label!: string;
  @Input() type!: string;
}
