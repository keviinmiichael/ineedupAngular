import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { User } from '../models/login.model';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let user: User | null = null;
  authService.user.subscribe((u) => (user = u));
  if (user) {
    const newReq = req.clone({
      headers: req.headers.set('auth_token', (user as unknown as User).token),
    });
    return next(newReq);
  }
  return next(req);
};
