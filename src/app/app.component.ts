import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './service/socket-io.service';
import { PushService } from './service/Push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private io: SocketIoService, private push: PushService) {
    document.title = "Inicio";
  }

  arrayTexto: string[] = ['Hello Mundo'];
  texto: string;

  ngOnInit() {
    this.io.listen('new-remote-op').subscribe((data: string) => {
      this.arrayTexto.push(data);
      this.push.create(data);
    });
  }

  onEmit() {
    if (!this.texto) return alert('Escribe un texto Jodaaa!');
    this.io.emit('new-op', this.texto);
    this.texto = "";
  }

}
