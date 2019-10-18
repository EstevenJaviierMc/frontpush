import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoint, httpOptions } from 'src/app/endpoint';


@Injectable({
  providedIn: 'root'
})
export class InvitacionService {

  constructor(private http: HttpClient) { }

  newInvitacion(invitacion: any): Observable<any> {
    return this.http.post(endpoint + 'new-invitacion', invitacion, httpOptions)
      .pipe(map(data => data));
  }

  getInvitaciones(): Observable<any> {
    return this.http.get(endpoint + 'invitaciones', httpOptions)
      .pipe(map(data => data));
  }
}
