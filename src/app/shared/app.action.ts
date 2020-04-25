export namespace Notificacion {
    export class Add {
        static readonly type = '[Notificacion] Add';
        constructor(public texto: string, public estado?: 'DEFAULT' | 'VISTO') { }
    }

    export class EditEstado {
        static readonly type = '[Notificacion] Edit Estado';
        constructor(public payload: any) { }
    }

    export class GetAll {
        static readonly type = '[Notificacion] Get All';
    }
}