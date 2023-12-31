import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsEnum } from '../../../../shared/models';
import { ButtonLinkComponent } from '../../../../shared/components/button-link/button-link.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'massoterapeuta-elisabete-home-where-i-work',
  standalone: true,
  imports: [CommonModule, ButtonLinkComponent, MatDividerModule],
  templateUrl: './home-where-i-work.component.html',
  styleUrl: './home-where-i-work.component.scss'
})
export class HomeWhereIWorkComponent {
  sectionsEnum: typeof SectionsEnum;

  constructor() {
    this.sectionsEnum = SectionsEnum;
  }
}
