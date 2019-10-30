import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { DetallesInvitacionComponent } from './invitaciones/detalles-invitacion/detalles-invitacion.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AdminGuard } from 'src/app/guard/admin.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'invitaciones', component: InvitacionesComponent, canActivate: [AdminGuard] },
  { path: 'detalles-invitacion/:id', component: DetallesInvitacionComponent },
  { path: '', pathMatch: 'full', redirectTo: 'invitaciones' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
