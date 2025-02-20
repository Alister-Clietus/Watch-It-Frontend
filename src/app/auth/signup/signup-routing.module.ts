import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuardianDetailsComponent } from './add-guardian-details/add-guardian-details.component';
import { AddDoctorDetailsComponent } from './add-doctor-details/add-doctor-details.component';
import { AddAdminDetailsComponent } from './add-admin-details/add-admin-details.component';
import { SignupSidebarComponent } from './signup-sidebar/signup-sidebar.component';

const routes: Routes = 
[
    {path:"guardian",component:AddGuardianDetailsComponent},
    {path:"doctor",component:AddDoctorDetailsComponent},
    {path:"admin",component:AddAdminDetailsComponent},
    {path:"sidebar",component:SignupSidebarComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
