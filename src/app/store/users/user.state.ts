import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user';

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUserState: UserState = userAdapter.getInitialState({
  selectedUserId: null,
});



