import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionsEnum } from '../../../../../shared/models';

@Component({
  selector: 'massoterapeuta-elisabete-sidenav-routes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav-routes.component.html',
  styleUrl: './sidenav-routes.component.scss'
})
export class SidenavRoutesComponent {
  sectionsEnum: typeof SectionsEnum;
  @Output() closeSidenav: EventEmitter<boolean>;

  constructor() {
    this.sectionsEnum = SectionsEnum;
    this.closeSidenav = new EventEmitter();
  }

  navigateSection(id: string): void {
    const element = document.getElementById(id) as HTMLElement;
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    this.closeSidenav.emit(true);
  }
}
