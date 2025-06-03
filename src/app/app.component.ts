import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppState } from './store/app.state';
import { loadUsers } from './store/users/user.actions';
import { loadOrders } from './store/orders/order.actions';
import { selectAllUsers } from './store/selectors';
import { selectUser } from './store/users/user.actions';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserOrdersComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadOrders());

    this.store.select(selectAllUsers).pipe(take(1)).subscribe(users => {
      if (users.length > 0) {
        this.store.dispatch(selectUser({ userId: users[0].id }));
      }
    });
  }
}
