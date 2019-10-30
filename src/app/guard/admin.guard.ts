import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['admin/login']);
            return false;
        }
        return true;
    }

}
