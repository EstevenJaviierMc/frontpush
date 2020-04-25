import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
navigator.serviceWorker.register('sw.js');

@Injectable({
    providedIn: 'root'
})
export class NotificacionService {
    n: any = [{ nombre: 'Nueva Reserva', estado: 'DEFAULT' }, { nombre: 'Nuevo Pago', estado: 'VISTO' }];
    getNotificaciones(aid?: number): Observable<any> {
        return this.n;
    }
}
