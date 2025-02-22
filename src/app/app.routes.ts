import { Routes } from '@angular/router';

export const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full', // Ensures full URL match before redirecting
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'guardian',
    loadChildren: () =>
      import('./guardian/guardian.module').then(
        (m) => m.GuardianModule
      ),
  },
    {
        path: 'fall-detection',
        loadChildren: () =>
          import('./fall-dection/fall-dection.module').then(
            (m) => m.FallDectionModule
          ),
      },

      {
        path: 'doctor',
        loadChildren: () =>
          import('./doctor-portal/doctor-portal.module').then(
            (m) => m.DoctorPortalModule
          ),
      },

      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin-routing.module').then(
            (m) => m.AdminRoutingModule
          ),
      },

];
