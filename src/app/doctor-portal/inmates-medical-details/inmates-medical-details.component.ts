import { Component } from '@angular/core';
import { DoctorSidebarComponent } from '../doctor-sidebar/doctor-sidebar.component';

@Component({
  selector: 'app-inmates-medical-details',
  standalone: true,
  imports: [DoctorSidebarComponent],
  templateUrl: './inmates-medical-details.component.html',
  styleUrl: './inmates-medical-details.component.css'
})
export class InmatesMedicalDetailsComponent {

}
