import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent {

  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
  @Input() colorName!: string;
}
