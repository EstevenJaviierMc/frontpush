import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificacionState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Select(NotificacionState) notificacion$: Observable<any>;

  ntfTotal: number = 0;

  constructor(private store: Store) {
    this.notificacion$.subscribe(({ notificaciones }) => this.ntfTotal = notificaciones.length)
  }

  ngOnInit(): void {
    // this.notificacion$.pipe(withLatestFrom(this.notificacion$))
    //   .subscribe(([_, animals]) => {
    //     // do something with animals
    //     console.log(animals);

    //   });
  }

}
