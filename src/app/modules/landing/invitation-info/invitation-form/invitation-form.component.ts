import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { MutationService } from '../../../graphql/mutation.service'

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

  constructor(private apollo: Apollo, private ms: MutationService) { }

  ngOnInit() {
  }

  onInvitar() {
    this.loading = true;

    this.ms.submitAddInvitado(this.formInvitation.value).subscribe(resul => {
      this.loading = false;
      this.formInvitation.reset(); console.log(this.formInvitation)
      alert('Se ha generado la invitacion para ' + resul.data['addInvitado'].nombres + ' ' + resul.data['addInvitado'].apellidos + ', con exito!')
    }, (error) => {
      this.loading = false;
      alert("Error, intentalo mas tarde!")
      console.log('there was an error sending the query', error);
    });
  }

}
