import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingModule } from './modules/landing/landing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { SharedModule } from './modules/shared/shared.module';
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  try {
    return JSON.parse(localStorage.getItem('currentUser'))['access_token'];
  } catch (e) {
    console.log("ds", e);
    return "";
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LandingModule,

    ReactiveFormsModule,

    AdminModule,

    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        skipWhenExpired: true,
        whitelistedDomains: ["127.0.0.1:8000"],
        blacklistedRoutes: ["127.0.0.1:8000/api/v1/auth/", "127.0.0.1:8000/api/v1/new-invitation"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
