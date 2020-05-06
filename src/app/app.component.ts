import { Component, OnInit } from '@angular/core';
import { PushService } from '~app/core/services/Push.service';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { Router } from '@angular/router';
import { Auth } from './core/states/auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private push: PushService, private store: Store,
    private actions: Actions, private router: Router) {
    document.title = document.title + " - Inicio";
  }

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Auth.Logout)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}