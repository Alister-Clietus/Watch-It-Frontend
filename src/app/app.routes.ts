import { Routes } from '@angular/router';

export const routes: Routes = 
[
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

];
