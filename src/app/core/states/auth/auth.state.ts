import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AuthStateModel } from './auth.model';
import { tap } from 'rxjs/operators';
import { Auth } from './auth.action';
import { AuthService } from '~app/core/services/auth.service';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null
  }
})

@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authService: AuthService) { }

  @Action(Auth.Login)
  login({ patchState }: StateContext<AuthStateModel>, action: Auth.Login) {
    return this.authService.login(action.payload).pipe(
      tap((result: { token: string }) => {
        patchState({
          token: result.token
        });
      })
    );
  }

  @Action(Auth.Logout)
  logout({ getState, setState }: StateContext<AuthStateModel>) {
    const state = getState();
    return this.authService.logout(state.token).subscribe(() => {
      setState({
        token: null
      });
    });
  }
}