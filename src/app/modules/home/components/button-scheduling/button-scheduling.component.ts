import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-scheduling',
  templateUrl: './button-scheduling.component.html',
  styleUrls: ['./button-scheduling.component.scss']
})
export class ButtonSchedulingComponent {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() colorName!: string;
  @Input() redirectUrl!: string;
}
