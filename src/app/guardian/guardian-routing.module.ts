import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianSideBarComponent } from './guardian-side-bar/guardian-side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddInmatesComponent } from './inmates/add-inmates/add-inmates.component';
import { UpdateInmatesComponent } from './inmates/update-inmates/update-inmates.component';
import { VerifyInmatesComponent } from './inmates/verify-inmates/verify-inmates.component';
import { DoctorApppointmentComponent } from './inmates/doctor-apppointment/doctor-apppointment.component';
import { InmatesMedicalDetailsComponent } from './inmates/inmates-medical-details/inmates-medical-details.component';
import { SettingsComponent } from './settings/settings.component';
import { AddDoctorDetailsComponent } from './add-doctor-details/add-doctor-details.component';
import { AddGuardianDetailsComponent } from './add-guardian-details/add-guardian-details.component';

const routes: Routes = 
[
  {path:"guardian-sidebar",component:GuardianSideBarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"add-inmates",component:AddInmatesComponent},
  {path:"add-guardian",component:AddGuardianDetailsComponent},
  {path:"update-inmates",component:UpdateInmatesComponent},
  {path:"verify-inmates",component:VerifyInmatesComponent},
  {path:"update-inmates",component:UpdateInmatesComponent},
  {path:"add-doctor",component:AddDoctorDetailsComponent},
  {path:"doctor-appointment",component:DoctorApppointmentComponent},
  {path:"medical-details",component:InmatesMedicalDetailsComponent},
  {path:"settings",component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardianRoutingModule { }
