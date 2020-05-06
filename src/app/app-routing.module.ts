import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoomComponent } from './core/components/room/room.component';
import { CreateRoomComponent } from './core/components/create-room/create-room.component';
import { ChatComponent } from './core/components/chat/chat.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'room', component: RoomComponent },
  { path: 'create-room/:roomID', component: CreateRoomComponent },
  {
    path: 'admin', loadChildren: () => import('~app/modules/admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: '**', redirectTo: 'chat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
