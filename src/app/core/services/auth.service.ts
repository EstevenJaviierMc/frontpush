import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any = "sduclskdmvlksdlvkm d kjsdnm";
  chao: any = "sduclskdmvlksdlvkm d kjsdnm";
  constructor() { }

  login(data: any): Observable<any> {
    return this.token;
  }

  logout(data: any) {
    return this.chao;
  }
}
