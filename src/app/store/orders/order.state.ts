import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Order } from '../../models/order';

export interface OrderState extends EntityState<Order> {}

export const orderAdapter = createEntityAdapter<Order>();

export const initialOrderState: OrderState = orderAdapter.getInitialState();