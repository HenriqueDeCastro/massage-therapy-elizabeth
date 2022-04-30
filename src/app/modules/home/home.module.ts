import { ButtonSchedulingModule } from './components/button-scheduling/button-scheduling.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardInfoModule } from 'src/app/modules/home/components/card-info/card-info.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    CardInfoModule,
    ButtonSchedulingModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
