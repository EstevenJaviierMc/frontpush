import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';

import { SocketIoService } from './service/socket-io.service';
import { PushService } from './service/Push.service';
import { NotificacionService } from './service/notificacion.service';
import { NavbarComponent } from './core/components/navbar/navbar.component';

import { environment } from 'src/environments/environment';
import { NotificacionState } from './shared/app.state';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxsModule.forRoot([NotificacionState], {
      developmentMode: !environment.production
    }),
    // NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    PushService,
    SocketIoService,
    NotificacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
