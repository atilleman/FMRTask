import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { mockOrders } from '../data/mockData';

@Injectable({ providedIn: 'root' })

export class OrderService {

  getOrders() {
    return of(mockOrders).pipe(delay(500));
  }

}