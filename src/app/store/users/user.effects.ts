import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserService } from '../../services/user.service';
import {
  loadUsers,
  loadUsersSuccess,
  selectUserDetailsSuccess
} from './user.actions';
import { selectSelectedUserId } from '../selectors';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private store = inject(Store<AppState>);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          tap(users => console.log('[Effect] getUsers() result:', users)),
          map(users => loadUsersSuccess({ users }))
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.store.select(selectSelectedUserId).pipe(
      debounceTime(100),
      distinctUntilChanged(),
      tap(userId => console.log('[Effect] selectedUserId changed to:', userId)),
      filter(userId => userId !== null),
      switchMap(userId =>
        this.userService.getUserDetails(userId!).pipe(
          tap(details => console.log('[Effect] getUserDetails result:', details)),
          map(userDetails => selectUserDetailsSuccess({ userDetails }))
        )
      )
    )
  );

  logUsersLoaded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadUsersSuccess),
        tap(action =>
          console.log('[Store] Users loaded into store:', action.users)
        )
      ),
    { dispatch: false }
  );
}
