import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invitation-form',
  templateUrl: './invitation-form.component.html',
  styleUrls: ['./invitation-form.component.css']
})
export class InvitationFormComponent implements OnInit {

  formInvitation = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    direccion: new FormControl(''),
    invitadoPor: new FormControl('')
  });

  invitado: any;
  loading: boolean = false;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  onInvitar() {
    this.loading = true;


  }

}
