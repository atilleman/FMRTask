import { User } from '../models/user';
import { Order } from '../models/order';

export interface AppState {
  users: {
    entities: { [id: number]: User };
    selectedUserId: number | null;
  };
  orders: {
    entities: { [id: number]: Order };
  };
}
