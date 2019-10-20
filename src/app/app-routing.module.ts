import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './modules/shared/page404/page404.component';

const routes: Routes = [
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: 'landing', loadChildren: './modules/landing/landing.module#LandingModule' },
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
