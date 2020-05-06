import { Injectable } from '@angular/core';
navigator.serviceWorker.register('sw.js');

@Injectable({
    providedIn: 'root'
})
export class PushService {
    create(body: { from: string, texto: string }) {
        Notification.requestPermission(result => {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification(body.from, {
                        body: body.texto,
                        icon: 'assets/img/img_perfil.jpg',
                        vibrate: [200, 100],
                        tag: body.from
                    });
                });
            }
        });
    }
}
