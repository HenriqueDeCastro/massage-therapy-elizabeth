import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInitiationComponent } from './components/home-initiation/home-initiation.component';
import { HomeWhoAmIComponent } from './components/home-who-am-i/home-who-am-i.component';
import { HomeWhereIWorkComponent } from './components/home-where-i-work/home-where-i-work.component';
import { HomeProceduresComponent } from './components/home-procedures/home-procedures.component';

@Component({
  selector: 'massoterapeuta-elisabete-home',
  standalone: true,
  imports: [CommonModule, HomeInitiationComponent, HomeWhoAmIComponent, HomeProceduresComponent, HomeWhereIWorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
