import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

import { webSocket } from 'rxjs/webSocket';
import * as socketio from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketIoService {
    uri: string = 'https://frontpush.herokuapp.com';
    socket: any;
    constructor() {
        this.socket = socketio(this.uri);
    }

    listen$(eventName: string) {
        return new Observable((subscriber) => {
            try {
                this.socket.on(eventName, (data) => {
                    subscriber.next(data);

                });
            } catch (error) {
                subscriber.error(error);
            }
        });
    }

    emit(eventName: string, data: { from: string, texto: string }) {
        this.socket.emit(eventName, data);
    }

}