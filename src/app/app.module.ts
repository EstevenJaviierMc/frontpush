import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '~app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { CoreModule } from '~core/core.module';

import { AppComponent } from '~app/app.component';

import { SocketIoService } from '~app/core/services/socket-io.service';
import { PushService } from '~app/core/services/Push.service';
import { NotificacionService } from '~app/core/services/notificacion.service';
import { NavbarComponent } from '~app/core/components/navbar/navbar.component';

import { environment } from 'src/environments/environment';
import { NotificacionState } from '~app/core/states/notificaciones/notificaciones.state';
import { AuthState } from '~core/states/auth/auth.state';
import { RoomComponent } from './core/components/room/room.component';
import { CreateRoomComponent } from './core/components/create-room/create-room.component';
import { ChatComponent } from './core/components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateRoomComponent,
    RoomComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NgxsModule.forRoot([NotificacionState, AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    NgxsLoggerPluginModule.forRoot(
      { disabled: environment.production }
    )
  ],
  providers: [
    PushService,
    SocketIoService,
    NotificacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
