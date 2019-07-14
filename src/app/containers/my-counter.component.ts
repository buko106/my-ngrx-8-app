import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementMe, incrementYou, setScore, reset } from '../counter.actions';
import { State as CounterState } from '../counter.reducer';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent implements OnInit, OnDestroy {
  count$: Observable<CounterState>;

  constructor(route: ActivatedRoute, private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.title = route.snapshot.toString();
  }

  readonly title: string;

  ngOnInit(): void {
    console.log('[MyCounterComponent] ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('[MyCounterComponent] ngOnDestroy');
  }

  incrementMe() {
    this.store.dispatch(incrementMe());
  }

  incrementYou() {
    this.store.dispatch(incrementYou());
  }

  setScore() {
    this.store.dispatch(setScore(2, 2));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
