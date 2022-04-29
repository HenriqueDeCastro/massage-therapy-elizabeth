import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPriceComponent } from './card-price.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ CardPriceComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ CardPriceComponent ]
})
export class CardPriceModule { }
