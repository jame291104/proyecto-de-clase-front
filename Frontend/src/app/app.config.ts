import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from "ngx-toastr"
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideToastr({
      timeOut: 2000, //timepo de duración en pantalla
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
      easeTime: 0,
      progressBar: true,
    })
  ]
};
