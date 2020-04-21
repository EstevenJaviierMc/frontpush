import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './service/socket-io.service';
import Push from 'push.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private io: SocketIoService) {
    document.title = "Inicio";
  }

  count: number = 0;
  texto: string = 'Hello Mundo';

  ngOnInit() {
    this.io.listen('new-remote-op').subscribe(({ data }) => {
      Push.create('Hello Mundo!', {
        icon: 'assets/apple-touch-icon-72x72.png',
        body: data,
        requireInteraction: true,
        vibrate: true
      })
    });

    setInterval(() => this.count++, 1 * 1000);
  }

  onEmit() {
    this.io.emit('new-op', this.texto);
  }

}
