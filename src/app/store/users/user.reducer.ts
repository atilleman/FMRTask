import { createReducer, on } from '@ngrx/store';
import { initialUserState, userAdapter } from './user.state';
import * as UserActions from './user.actions';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.loadUsersSuccess, (state, { users }) => userAdapter.setAll(users, state)),
  on(UserActions.selectUser, (state, { userId }) => ({ ...state, selectedUserId: userId })),
  on(UserActions.insertUser, (state, { user }) => userAdapter.upsertOne(user, state)),
  on(UserActions.updateUser, (state, { update }) => userAdapter.updateOne(update, state)),
  on(UserActions.deleteUser, (state, { userId }) => userAdapter.removeOne(userId, state)),
);