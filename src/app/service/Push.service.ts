import { Injectable } from '@angular/core';
navigator.serviceWorker.register('sw.js');

@Injectable({
    providedIn: 'root'
})
export class PushService {
    create(body: string) {
        Notification.requestPermission(result => {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification('Hello Mundo!', {
                        body: body,
                        icon: 'assets/img/img_perfil.jpg',
                        vibrate: [200, 100],
                        tag: 'identificador'
                    });
                });
            }
        });
    }
}
