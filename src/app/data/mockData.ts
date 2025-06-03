import { Order } from "../models/order";
import { User } from "../models/user";

export const mockUsers: User[] = [
  { id: 1, name: 'Yossi' },
  { id: 2, name: 'Amir' },
  { id: 3, name: 'Adam' },
  { id: 4, name: 'Shiran' },
  { id: 5, name: 'Vered' },
];

export const mockOrders: Order[] = [
  { id: 1000, userId: 1, total: 7000 },
  { id: 1001, userId: 1, total: 6000 },
  { id: 1002, userId: 2, total: 1250 },
  { id: 1003, userId: 3, total: 340 },
  { id: 1004, userId: 3, total: 6689 },
  { id: 1005, userId: 4, total: 11520 },
  { id: 1006, userId: 5, total: 7898 },
  { id: 1007, userId: 3, total: 4000 },
];
