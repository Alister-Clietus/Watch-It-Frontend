import { Component } from '@angular/core';
import { GuardianSideBarComponent } from '../guardian-side-bar/guardian-side-bar.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GuardianSideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent 
{


  totalInmates: number = 150; // Example count
  inmatesCantWalk: number = 30;
  upcomingCheckups: number = 5;
  inmatesWithDiseases: number = 20;
sleepCycleData: any;
sleepCycleOptions: any;
line: any;

}



