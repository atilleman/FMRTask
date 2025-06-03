import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { mockUsers } from '../data/mockData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() {
    return of(mockUsers).pipe(delay(500));
  }

  getUserDetails(userId: number) {
    const user = mockUsers.find(u => u.id === userId);
    return of(user).pipe(delay(800));
  }

}
