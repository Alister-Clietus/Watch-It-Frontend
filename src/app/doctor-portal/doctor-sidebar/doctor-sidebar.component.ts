import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-sidebar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './doctor-sidebar.component.html',
  styleUrl: './doctor-sidebar.component.css'
})
export class DoctorSidebarComponent 
{
  addInmatesMedicalDetails() {
    this.router.navigate(['./doctor/inmates-medical-details']);
  }

  logout() {
    this.router.navigate(['./login']);
  }
  liveMonitorin() {
    this.router.navigate(['./fall-detection/camera-capture']);
  }

  doctorAppointment() {
    this.router.navigate(['./doctor/appointments']);
  }
  addInmatesMedicalRecord()
  {
    this.router.navigate(['./doctor/medical-details']);
  }
    isSidebarOpen: boolean = false;
  
    constructor(private router: Router) { }
      
    ngOnInit(): void 
    {
  
    }
    toggleSidebar() 
    {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

}
