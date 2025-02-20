import { Component } from '@angular/core';
import { DoctorSidebarComponent } from '../doctor-sidebar/doctor-sidebar.component';
import { HttpService } from '../../service/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [DoctorSidebarComponent,CommonModule],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent {

  appointments: any[] = [];
  notedAppointments: Set<number> = new Set();

  constructor(private appointmentService: HttpService) { }

  ngOnInit(): void {
    this.appointmentService.getDataUsingUrl("http://127.0.0.1:8099/api/guardian/getall-doctors-appointment/search?sEcho=1&iColumns=4&sColumns=%2C%2C%2C&iDisplayStart=0&iDisplayLength=5&mDataProp_0=patientName&bSortable_0=true&mDataProp_1=doctorName&bSortable_1=true&mDataProp_2=appointmentTime&bSortable_2=false&mDataProp_3=AppointmentDate&bSortable_3=true&iSortCol_0=0&sSortDir_0=asc&iSortingCols=1&searchParam=").subscribe((data:any) => {
      this.appointments = data.aaData;
    });
  }

  markAsNoted(index: number): void {
    this.notedAppointments.add(index);
  }

  isNoted(index: number): boolean {
    return this.notedAppointments.has(index);
  }

}
