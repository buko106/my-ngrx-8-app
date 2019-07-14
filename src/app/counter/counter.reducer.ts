import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface State {
  readonly myScore: number;
  readonly yourScore: number;
}

export const initialState: State = {
  myScore: 0,
  yourScore: 0,
};

export const counterReducer = createReducer<State>(
  initialState,
  on(CounterActions.incrementMe, state => ({ ...state, myScore: state.myScore + 1 })),
  on(CounterActions.incrementYou, state => ({ ...state, yourScore: state.yourScore + 1 })),
  on(CounterActions.setScore, (state, { myScore, yourScore }) => ({ myScore, yourScore })),
  on(CounterActions.reset, state => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
