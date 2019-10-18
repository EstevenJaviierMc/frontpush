import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { DetallesInvitacionComponent } from './invitaciones/detalles-invitacion/detalles-invitacion.component';
import { LoginComponent } from './auth/login/login.component';
import { Page404Component } from '../shared/page404/page404.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'invitaciones', component: InvitacionesComponent },
  { path: 'detalles-invitacion/:id', component: DetallesInvitacionComponent },
  { path: 'admin', pathMatch: 'full', redirectTo: 'invitaciones' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
