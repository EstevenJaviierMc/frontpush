import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './service/socket-io.service';
import { PushService } from './service/Push.service';
import { Observable } from 'rxjs';
import { NotificacionState, NotificacionStateModel } from './shared/app.state';
import { Store, Select } from '@ngxs/store';
import { Notificacion } from './shared/app.action';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrayTexto: string[] = ['Hello Mundo'];
  texto: string;

  noti: any = [{ nombre: 'Nueva Reserva', estado: 'DEFAULT' }, { nombre: 'Nuevo Pago', estado: 'VISTO' }];

  @Select(NotificacionState) notificacion$: Observable<any>;

  constructor(private io: SocketIoService, private push: PushService, private store: Store) {
    // this.store.dispatch(new Notificacion.GetAll(this.noti));
    document.title = document.title + " - Inicio";
  }

  ngOnInit() {
    this.io.listen('new-remote-op').subscribe((data: string) => {
      this.arrayTexto.unshift('-' + data);
      this.push.create(data);
      this.store.dispatch(new Notificacion.GetAll(this.noti));
    });
  }

  onEmit() {
    if (!this.texto) return alert('Escribe un texto Jodaaa!');
    this.io.emit('new-op', this.texto);
    this.arrayTexto.unshift('+' + this.texto);
    this.texto = "";
  }

}
