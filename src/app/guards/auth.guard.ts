import { CanActivateFn, Router } from '@angular/router';
import { inject, INJECTOR } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if sessionStorage is available
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('email')) {
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
}
