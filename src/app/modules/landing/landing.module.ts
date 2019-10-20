import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { InvitationInfoComponent } from './invitation-info/invitation-info.component';
import { InvitationFormComponent } from './invitation-info/invitation-form/invitation-form.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    InvitationFormComponent,
    InvitationInfoComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
