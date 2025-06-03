import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectSelectedUserSummary } from '../../store/selectors';

@Component({
  selector: 'app-user-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-total.component.html',
  styleUrl: './user-total.component.scss'
})
export class UserTotalComponent {
  summary$ = inject(Store<AppState>).select(selectSelectedUserSummary);
}
