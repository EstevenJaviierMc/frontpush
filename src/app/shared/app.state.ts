import { State, StateToken, StateContext, Action, Selector, Store } from '@ngxs/store';
import { NotificacionService } from '../service/notificacion.service';
import { tap } from 'rxjs/operators';
import { Notificacion } from './app.action';
import { Injectable } from '@angular/core';
import { NotificacionModel } from 'src/app/core/models/notificacion.model';
import { patch } from '@ngxs/store/operators';

const NOTIFICACION_STATE_TOKEN = new StateToken<NotificacionStateModel>('notificacion');

export interface NotificacionStateModel {
    notificaciones: NotificacionModel[];
}

@State<NotificacionStateModel>({
    name: NOTIFICACION_STATE_TOKEN,
    defaults: {
        notificaciones: []
    }

})

@Injectable()
export class NotificacionState {
    constructor(private store: Store, private notificacionService: NotificacionService) { }

    @Action(Notificacion.GetAll)
    getNotificaciones(ctx: StateContext<NotificacionStateModel>, action: Notificacion.GetAll) {
        return this.notificacionService.getNotificaciones()
            .pipe(tap(notificaciones => {
                ctx.setState({
                    ...ctx.getState(),
                    notificaciones: [notificaciones]
                });
            }));
    }

    @Action(Notificacion.Add)
    addNotificacion(ctx: StateContext<any>, action: Notificacion.Add) {

        ctx.setState({
            ...ctx.getState(),
            notificaciones: [action]
        });
    }
}