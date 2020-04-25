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

  @Select(Notificacion.GetAll) notificacion$;

  constructor(private io: SocketIoService, private push: PushService, private store: Store) {

    document.title = document.title + " - Inicio";
  }

  ngOnInit() {
    // this.notificacion$.subscribe((data) => {
    //   console.log(data);
    // })

    this.io.listen('new-remote-op').subscribe((data: string) => {
      this.arrayTexto.unshift('-' + data);
      this.push.create(data);
      this.store.dispatch(new Notificacion.Add(data));
    });
  }

  onEmit() {
    if (!this.texto) return alert('Escribe un texto Jodaaa!');
    this.io.emit('new-op', this.texto);
    this.arrayTexto.unshift('+' + this.texto);
    this.texto = "";
  }

}
