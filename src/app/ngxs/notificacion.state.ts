// import { Injectable } from '@angular/core';
// import { State, Action, StateContext, StateToken } from '@ngxs/store';
// import { Notificacion } from './norificaciones.action';
// import { NotificacionService } from '../service/notificacion.service';
// import { tap } from 'rxjs/operators';

// export interface NotificacionStateModel {
//     name: string;
// }

// const NOTIFICACION_STATE_TOKEN = new StateToken<NotificacionStateModel>('notificaciones');

// @State<NotificacionStateModel[]>({
//     name: NOTIFICACION_STATE_TOKEN,
//     defaults: []
// })

// @Injectable()
// export class NotificacionState {
//     constructor(private notificacionService: NotificacionService) { }

//     @Action(Notificacion.FetchAll)
//     getNotificaciones({ getState, patchState }: StateContext<NotificacionStateModel[]>) {
//         const state = getState();
//         return this.notificacionService.getNotificaciones()
//             .pipe(tap(notificaciones => patchState({ ...notificaciones })));
//     }

//     @Action(Notificacion.Add)
//     addNotificacion(ctx: StateContext<NotificacionStateModel>, action: NotificacionStateModel) {
//         const state = ctx.getState();
//         ctx.setState({
//             ...state,
//             name: action.name
//         });
//     }
// }