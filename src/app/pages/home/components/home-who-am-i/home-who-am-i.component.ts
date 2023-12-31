import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsEnum } from '../../../../shared/models';
import { ButtonLinkComponent } from '../../../../shared/components/button-link/button-link.component';

@Component({
  selector: 'massoterapeuta-elisabete-home-who-am-i',
  standalone: true,
  imports: [CommonModule, ButtonLinkComponent],
  templateUrl: './home-who-am-i.component.html',
  styleUrl: './home-who-am-i.component.scss'
})
export class HomeWhoAmIComponent {
  sectionsEnum: typeof SectionsEnum;

  constructor() {
    this.sectionsEnum = SectionsEnum;
  }
}
