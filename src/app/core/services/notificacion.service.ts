import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
navigator.serviceWorker.register('sw.js');

@Injectable({
    providedIn: 'root'
})
export class NotificacionService {
    n: any = [{ nombre: 'Nueva Reserva', estado: 'DEFAULT' }, { nombre: 'Nueva Cargo', estado: 'DEFAULT' }, { nombre: 'Nuevo Pago', estado: 'VISTO' }];
    getNotificaciones(aid?: number) {
        return this.n;
    }
}
