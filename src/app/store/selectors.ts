// store/selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectUsersState = (state: AppState) => state.users;
export const selectOrdersState = (state: AppState) => state.orders;

export const selectAllUsers = createSelector(
  selectUsersState,
  (state) => Object.values(state.entities)
);

export const selectSelectedUserId = createSelector(
  selectUsersState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUsersState,
  selectSelectedUserId,
  (state, selectedUserId) => selectedUserId ? state.entities[selectedUserId] : null
);

export const selectOrders = createSelector(
  selectOrdersState,
  (state) => Object.values(state.entities)
);

export const selectSelectedUserOrders = createSelector(
  selectOrders,
  selectSelectedUserId,
  (orders, userId) => orders.filter(order => order.userId === userId)
);

export const selectSelectedUserSummary = createSelector(
  selectSelectedUser,
  selectSelectedUserOrders,
  (user, orders) => user ? { name: user.name, total: orders.reduce((sum, o) => sum + o.total, 0) } : null
);
