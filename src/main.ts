// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from './app/store/users/user.effects';
import { OrderEffects } from './app/store/orders/order.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './app/store/users/user.reducer';
import { orderReducer } from './app/store/orders/order.reducer';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ users: userReducer, orders: orderReducer }),
    provideEffects([UserEffects, OrderEffects]),
    provideStoreDevtools()
  ]
});
