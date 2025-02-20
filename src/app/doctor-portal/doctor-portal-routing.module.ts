import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSidebarComponent } from './doctor-sidebar/doctor-sidebar.component';
import { InmatesMedicalDetailsComponent } from './inmates-medical-details/inmates-medical-details.component';
import { AddMedicalInmatesComponent } from './add-medical-inmates/add-medical-inmates.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';

const routes: Routes = 
[
  {path:"sidebar",component:DoctorSidebarComponent},
  {path:"inmates-medical-details",component:InmatesMedicalDetailsComponent},
  {path:"medical-details",component:AddMedicalInmatesComponent},
  {path:"appointments",component:MyAppointmentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorPortalRoutingModule { }
