import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import { SectionsEnum, fadeIn, slideUp } from '../../../../shared/models';

@Component({
  selector: 'massoterapeuta-elisabete-home-initiation',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home-initiation.component.html',
  styleUrl: './home-initiation.component.scss',
  animations: [
    trigger("fadeInAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '800ms' }} )]),
    ]),
    trigger("slideUpAnimation", [
      transition("void => *", [useAnimation(slideUp, {params: { time: '800ms' }} )]),
    ]),
  ]
})
export class HomeInitiationComponent {
  sectionsEnum: typeof SectionsEnum;

  navigateSection(id: string): void {
    const element = document.getElementById(id) as HTMLElement;
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
  }

  constructor() {
    this.sectionsEnum = SectionsEnum;
  }
}
