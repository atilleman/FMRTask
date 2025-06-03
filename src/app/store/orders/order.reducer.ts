import { createReducer, on } from '@ngrx/store';
import { initialOrderState, orderAdapter } from './order.state';
import * as OrderActions from './order.actions';

export const orderReducer = createReducer(
  initialOrderState,
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => orderAdapter.setAll(orders, state))
);