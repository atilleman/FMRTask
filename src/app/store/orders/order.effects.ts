import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderService } from '../../services/order.service';
import * as OrderActions from './order.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class OrderEffects {
  private actions$ = inject(Actions);
  private orderService = inject(OrderService);

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      switchMap(() =>
        this.orderService.getOrders().pipe(
          map(orders => OrderActions.loadOrdersSuccess({ orders }))
        )
      )
    )
  );
}
