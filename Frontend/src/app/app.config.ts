import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideToastr } from "ngx-toastr"

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({
      timeOut: 2000, //timepo de duración en pantalla
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
      easeTime: 0,
      progressBar: true,
    })
  ]
};
