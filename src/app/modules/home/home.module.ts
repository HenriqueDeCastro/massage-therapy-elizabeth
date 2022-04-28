import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardInfoModule } from 'src/app/modules/home/components/card-info/card-info.module';
import { CardPriceModule } from './components/card-price/card-price.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    CardInfoModule,
    CardPriceModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
