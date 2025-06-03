import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectAllUsers } from '../../store/selectors';
import { selectUser } from '../../store/users/user.actions';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users$ = inject(Store<AppState>).select(selectAllUsers);

  constructor(private store: Store<AppState>) {}

  onSelectUser(id: number) {
    this.store.dispatch(selectUser({ userId: id }));
  }
}

