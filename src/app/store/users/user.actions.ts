import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';
import { Update } from '@ngrx/entity';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const selectUser = createAction('[User] Select User', props<{ userId: number }>());
export const insertUser = createAction('[User] Insert User', props<{ user: User }>());
export const updateUser = createAction('[User] Update User', props<{ update: Update<User> }>());
export const deleteUser = createAction('[User] Delete User', props<{ userId: number }>());
export const selectUserDetailsSuccess = createAction('[User] Select User Details Success', props<{ userDetails: any }>());

