import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['admin/invitaciones']);
      return false;
    }
    return true;
  }

}
