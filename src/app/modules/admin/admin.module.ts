import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { DetallesInvitacionComponent } from './invitaciones/detalles-invitacion/detalles-invitacion.component';


@NgModule({
  declarations: [
    LoginComponent,
    InvitacionesComponent,
    DetallesInvitacionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }