import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvitacionService } from '../../../../service/invitacion.service';
import swal from 'src/assets/sweetalert'

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

  constructor(private servInvitacion: InvitacionService) { }

  ngOnInit() {
  }

  onInvitar() {
    this.loading = true;

    this.servInvitacion.newInvitacion(this.formInvitation.value)
      .subscribe(data => {
        swal("", "Invitacion para " + data.nombres + ", Exitosa!", "success", {
          buttons: { cancel: false, confirm: false }, timer: 3000
        });
        this.loading = false;
        this.formInvitation.reset();
      }, err => {
        console.log(err)
        swal("", "Se ha presentado un error, intentalo mas tarde!", "info", {
          buttons: { cancel: false, confirm: false }, timer: 3000
        });
        this.loading = false;
      });
  }

}
