import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SocketIoService {
    socket: any;

    constructor() {
        this.socket = io('http://localhost:3000');
    }

    listen(eventName: string) {
        return new Observable((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }

    emit(eventName: string, data: any) {
        this.socket.emit(eventName, data);
        console.log(434);

    }
}
