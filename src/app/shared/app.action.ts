import { NotificacionModel } from '../core/models/notificacion.model';

export namespace Notificacion {
    export class GetAll {
        static readonly type = '[Notificacion] Get All';
        constructor(public notificaciones: NotificacionModel[]) { }
    }
}