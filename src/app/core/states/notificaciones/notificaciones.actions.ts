import { Notificacion } from '../../models/notificacion.model'

export namespace Notification {
    export class Add {
        static readonly type = '[Notificacion] Add';
        constructor(public payload: Notificacion) { }
    }

    export class UpdateEstado {
        static readonly type = '[Notificacion] UpdateEstado';
        constructor(public id: number, public estado: 'DEFAULT' | 'VISTO') { }
    }
}