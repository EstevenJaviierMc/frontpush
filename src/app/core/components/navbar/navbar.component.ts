import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificacionState } from 'src/app/shared/app.state';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notificacion$: Observable<NotificacionState>;

  constructor(private store: Store) {
    this.notificacion$ = this.store.select(state => state.notificacion);
  }

  ngOnInit(): void {
    this.notificacion$.pipe(withLatestFrom(this.notificacion$))
      .subscribe(([_, animals]) => {
        // do something with animals
        console.log(animals);

      });

  }

}
