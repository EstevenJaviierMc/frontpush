import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MutationService {
  AddInvitado = gql`
    mutation submitRepository($nombres: String!, $apellidos: String!, $telefono: String!, $email: String!, $direccion: String!, $invitadoPor: String!) {
        addInvitado(
            nombres: $nombres
            apellidos: $apellidos
            telefono: $telefono
            email: $email
            direccion: $direccion
            invitadoPor: $invitadoPor
        ){
          nombres
          apellidos
        }
    }`;

  constructor(private apollo: Apollo) { }

  submitAddInvitado(data: any) {
    return this.apollo.mutate({
      mutation: this.AddInvitado,
      variables: {
        nombres: data.nombres,
        apellidos: data.apellidos,
        telefono: data.telefono,
        email: data.email,
        direccion: data.direccion,
        invitadoPor: data.invitadoPor,
      }
    });
  }

}
