import { State, Action, StateContext, Selector } from '@ngxs/store';
import { NotificacionStateModel } from '../notificaciones/notificaciones.model';
import { Notification } from './notificaciones.actions';

@State<NotificacionStateModel>({
    name: 'notificaciones',
    defaults: {
        notificaciones: []
    }
})
export class NotificacionState {
    @Selector()
    static getNotificaciones(state: NotificacionStateModel) { return state.notificaciones; }

    // Añade una nueva notificacion al estado
    @Action(Notification.Add)
    add({ getState, patchState }: StateContext<NotificacionStateModel>, { payload }: Notification.Add) {
        const state = getState();
        patchState({
            notificaciones: [payload, ...state.notificaciones]
        });
    }


    // Elimina un post del estado
    @Action(Notification.UpdateEstado)
    UpdateEstado({ getState, patchState }: StateContext<NotificacionStateModel>, action: Notification.UpdateEstado) {
        patchState({
            notificaciones: getState().notificaciones.filter(notificacion => {
                if (notificacion.id == action.id) {
                    notificacion.estado = action.estado
                }
            })
        });
    }
}