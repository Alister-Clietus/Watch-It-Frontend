import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guardian-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guardian-side-bar.component.html',
  styleUrls: ['./guardian-side-bar.component.css']
})
export class GuardianSideBarComponent 
{
addGuardianData() 
{
  this.router.navigate(['./guardian/add-guardian']);
}
addDoctorDetails() 
{
  this.router.navigate(['./guardian/add-doctor']);
}
goToDashboard() 
  {
    this.router.navigate(['./guardian/dashboard']);
  }
logout() {
  this.router.navigate(['./login']);
}
openSettings() {
  this.router.navigate(['./guardian/settings']);
}
liveMonitorin() {
  this.router.navigate(['./fall-detection/camera-capture']);
}
uploadFile() {
throw new Error('Method not implemented.');
}
downloadFile() {
throw new Error('Method not implemented.');
}
doctorAppointment() {
  this.router.navigate(['./guardian/doctor-appointment']);}
addInmatesMedicalRecord()
{
  this.router.navigate(['./guardian/medical-details']);
}
addInmatesData() 
{
  this.router.navigate(['./guardian/add-inmates']);
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
