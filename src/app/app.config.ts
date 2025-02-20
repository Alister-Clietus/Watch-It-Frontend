import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(), // Required for Toastr
    provideToastr({
      timeOut: 3000,  // Toast duration
      positionClass: 'toast-top-right',  // Position
      preventDuplicates: true, // Avoid duplicate toasts
    }),
  ]
};
