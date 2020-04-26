import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './service/socket-io.service';
import { PushService } from './service/Push.service';
import { Store } from '@ngxs/store';
import { Notification } from './core/state/notificaciones/notificaciones.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrayTexto: string[] = ['Hello Mundo'];
  texto: string;

  constructor(private io: SocketIoService, private push: PushService, private store: Store) {
    document.title = document.title + " - Inicio";
  }

  ngOnInit() {
    this.io.listen('new-remote-op').subscribe((data: string) => {
      this.arrayTexto.unshift('-' + data);
      this.push.create(data);
      this.store.dispatch(new Notification.Add({ id: 1, texto: 'Nueva Reserva', estado: 'DEFAULT' }));
    });
  }

  onEmit() {
    if (!this.texto) return alert('Escribe un texto Jodaaa!');
    this.io.emit('new-op', this.texto);
    this.arrayTexto.unshift('+' + this.texto);
    this.texto = "";
  }

}
