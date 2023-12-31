import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'massoterapeuta-elisabete-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: string;

  constructor() {
    this.currentYear = new Date().getFullYear().toString();
  }
}
