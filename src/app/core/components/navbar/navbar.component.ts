import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificacionState } from '../../state/notificaciones/notificaciones.state';
import { Notificacion } from '../../models/notificacion.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ntfTotal: number = 0;
  // Uses the notificaciones_ memoized selector to only return notificaciones_
  @Select(NotificacionState.getNotificaciones) notificaciones$: Observable<Notificacion[]>;

  constructor() {
    this.notificaciones$.subscribe(data => this.ntfTotal = data.length);
  }

  ngOnInit(): void {
  }

}
