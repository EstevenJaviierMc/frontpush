import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoint, httpOptions } from 'src/app/endpoint';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    getToken(user: any): Observable<any> {
        return this.http.post(endpoint + 'auth/login', user, httpOptions)
            .pipe(map(data => data));
    }
}
