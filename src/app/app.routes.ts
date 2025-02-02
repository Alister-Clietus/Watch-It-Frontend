import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: 'fall-detection',
        loadChildren: () =>
          import('./fall-dection/fall-dection.module').then(
            (m) => m.FallDectionModule
          ),
      },
      {
        path: '', // Default route
        redirectTo: '/fall-detection/camera-capture',
        pathMatch: 'full',
      },
      {
        path: '**', // Wildcard route for a 404 page
        redirectTo: '/fall-detection/camera-capture',
      },

];
