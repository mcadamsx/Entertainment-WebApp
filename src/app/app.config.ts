import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient , withFetch } from '@angular/common/http';
import {AuthService} from "./services/auth.service";
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),  [provideHttpClient( withFetch()),AuthService ],  provideAnimations(),
    provideToastr() ]
};
