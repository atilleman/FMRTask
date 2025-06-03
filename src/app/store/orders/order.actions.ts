import { createAction, props } from '@ngrx/store';
import { Order } from '../../models/order';

export const loadOrdersSuccess = createAction('[Order API] Load Orders Success', props<{ orders: Order[] }>());
export const loadOrders = createAction('[App Init] Load Orders');

