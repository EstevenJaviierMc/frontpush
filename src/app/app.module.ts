import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LandingModule } from './modules/landing/landing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { SharedModule } from './modules/shared/shared.module';
import { JwtModule } from "@auth0/angular-jwt";
import { urlBackend } from 'src/app/endpoint'
import { RefreshTokenInterceptor } from './interceptor/refresh-token.interceptor';
import { SocketIoService } from './service/socket-io.service';

export function tokenGetter() {
  try {
    return JSON.parse(localStorage.getItem('currentUser'))['access_token'];
  } catch (e) {
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
    FormsModule,
    AdminModule,

    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        skipWhenExpired: true,
        whitelistedDomains: [urlBackend],
        blacklistedRoutes: [
          urlBackend + "/api/v1/auth/",
          urlBackend + "/api/v1/new-invitation"
        ]
      }
    })
  ],
  providers: [
    SocketIoService,
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
