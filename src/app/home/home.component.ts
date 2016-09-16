import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// Store is injected into our components to gain access to our application State and to dispatch actions
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../core/counter.reducer';
/**
 * NGRX
 * Inject the Store service into your components and services.
 * The store.select method is used to obtain the appropriate
 * slice(s) of state from your application store - see:
 * StoreModule.provideStore(reducers, initialState) in app.module
 */

interface AboutState {
  counter: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Conversengine';
  counter: Observable<number>;

  constructor(public store: Store<AboutState>) {
    this.counter = store.select('counterReduc');
   }

  ngOnInit() {
    // this.counter = this.store.select('counterReduc');
  }

  // dispatch INCREMENT Action
  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
  // dispatch DECREMENT Action
  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
  // dispatch RESET Action
  reset() {
    this.store.dispatch({ type: RESET });
  }

}
