import { Injectable, Injector } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let AuthService = this.injector.get(AuthentificationService)
    let Tokenized = req.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthService.GetToken()}`
      }
    })
    return next.handle(Tokenized)
  }
}
