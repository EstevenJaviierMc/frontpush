import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { SocketIoService } from './service/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private io: SocketIoService) {
    document.title = "Inicio";
  }

  ngOnInit() {
    this.io.listen('Hola').subscribe(data => {
      console.log(data);
    });
  }

  chao() {
    this.io.emit('dis', 'Me fui!');
  }

}
