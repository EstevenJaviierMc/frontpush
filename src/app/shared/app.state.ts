import { State, StateToken, StateContext, Action } from '@ngxs/store';
import { NotificacionService } from '../service/notificacion.service';
import { tap } from 'rxjs/operators';
import { Notificacion } from './app.action';
import { Injectable } from '@angular/core';

const NOTIFICACION_STATE_TOKEN = new StateToken<NotificacionStateModel>('notificacion');

export interface NotificacionStateModel {
    texto: string;
    estado?: 'DEFAULT' | 'VISTO';
}

@State<NotificacionStateModel>({
    name: NOTIFICACION_STATE_TOKEN,
    defaults: {
        texto: '',
        estado: 'DEFAULT'
    }
})

@Injectable()
export class NotificacionState {
    constructor(private notificacionService: NotificacionService) { }

    @Action(Notificacion.GetAll)
    getNotificaciones({ getState, patchState }: StateContext<NotificacionStateModel>) {
        const state = getState();
        return this.notificacionService.getNotificaciones()
            .pipe(tap(notificaciones => patchState({ state, ...notificaciones })));
    }

    @Action(Notificacion.Add)
    addNotificacion(ctx: StateContext<NotificacionStateModel>, { payload }: Notificacion.Add) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            texto: payload
        });
    }
}