import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketIoService } from '~app/core/services/socket-io.service';
import { PushService } from '~app/core/services/Push.service';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { Router } from '@angular/router';
import { Auth } from '~app/core/states/auth/auth.action';
import { retryWhen, tap, delay } from 'rxjs/operators';
import { Notification } from '~app/core/states/notificaciones/notificaciones.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  arrayTexto: any[] = [];
  texto: string;
  hasError: string;

  currentUser: string = localStorage.getItem('currentUser');

  private socketSubscription: Subscription;

  constructor(private io: SocketIoService, private push: PushService, private store: Store,
    private actions: Actions, private router: Router) {
    document.title = document.title + " - Inicio";
  }

  ngOnInit() {
    this.socketIo();
    this.actions.pipe(ofActionDispatched(Auth.Logout)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  setUserName(nombre: string) {
    if (nombre.length > 15 || nombre.length < 3) {
      return this.hasError = 'El nombre debe contener entre 3 y 15 caracteres';
    }
    this.currentUser = nombre;
    localStorage.setItem('currentUser', nombre);
  }

  socketIo() {
    this.socketSubscription = this.io.listen$('new-remote-op')
      .subscribe((data: any) => {
        this.arrayTexto.unshift(data);
        this.push.create(data);
        this.store.dispatch(new Notification.Add({ id: 1, texto: data.texto, from: data.from, estado: 'DEFAULT' }));
      }, err => {
        console.error(err);
      });
  }

  onEmit() {
    if (!this.texto) return alert('Escribe un texto Jodaaa!');
    const msg = { from: this.currentUser, texto: this.texto }
    this.io.emit('new-op', msg);
    this.arrayTexto.unshift(msg);
    this.texto = "";

  }

}
