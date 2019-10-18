import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { DetallesInvitacionComponent } from './invitaciones/detalles-invitacion/detalles-invitacion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    InvitacionesComponent,
    DetallesInvitacionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
