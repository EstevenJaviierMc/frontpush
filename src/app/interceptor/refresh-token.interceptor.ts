import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((errorResponse: HttpErrorResponse) => {
            if (errorResponse.status == 401) {
                localStorage.removeItem('currentUser');
                alert("Tu sesion ha expirado, ingresa nuevamente!");
                this.router.navigate(['/admin/login']);
            }
            return throwError(errorResponse);
        }));
    }
}