import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvitacionService } from '../../service/invitacion.service';
import sweetalert from 'sweetalert';

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
    sweetalert("", "Invitacion para  + data.nombres +  exitosa", "success", {
      buttons: { cancel: false, confirm: false }, timer: 2000
    });

    this.servInvitacion.newInvitacion(this.formInvitation.value)
      .subscribe(data => {
        sweetalert("Enhorabuena!", "Invitacion para " + data.nombres + " exitosa", "success", {
          timer: 2000
        });
        this.loading = false;
        this.formInvitation.reset();
      }, err => {
        alert("Se ha presentado un error, intentalo mas tarde!");
        console.log(err);
        this.loading = false;
      });



  }

}
