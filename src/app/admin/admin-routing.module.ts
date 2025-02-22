import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { DBSettingsComponent } from './db-settings/db-settings.component';
import { AddGuardianDetailsComponent } from './add-guardian-details/add-guardian-details.component';
import { SettingsComponent } from './settings/settings.component';
import { LandingAdminComponent } from './landing-admin/landing-admin.component';
import { AddAdminDetailsComponent } from './add-admin-details/add-admin-details.component';

const routes: Routes = 
[
    {path:"sidebar",component:AdminSidebarComponent},
    {path:"db-settings",component:DBSettingsComponent},
    {path:"add-admin-details",component:AddAdminDetailsComponent},
    {path:"settings",component:SettingsComponent},
    {
      path:"admin-landing",component:LandingAdminComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
