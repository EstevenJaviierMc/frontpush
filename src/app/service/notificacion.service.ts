import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
navigator.serviceWorker.register('sw.js');

@Injectable({
    providedIn: 'root'
})
export class NotificacionService {
    n: any = ['Nueva Reserva', 'Nuevo Pago'];
    getNotificaciones(aid?: number): Observable<any> {
        return this.n;
    }
}
