import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { InvitationInfoComponent } from './invitation-info/invitation-info.component';
import { Page404Component } from '../shared/page404/page404.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'invitar-a', component: InvitationInfoComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
