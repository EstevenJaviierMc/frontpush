import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-invitacion',
  templateUrl: './detalles-invitacion.component.html',
  styleUrls: ['./detalles-invitacion.component.css']
})
export class DetallesInvitacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
