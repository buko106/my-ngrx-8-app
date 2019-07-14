import { createAction } from '@ngrx/store';

export const incrementMe = createAction('[Counter Component] Increment Me');
export const incrementYou = createAction('[Counter Component] Increment You');
export const setScore = createAction('[Counter Component] Set Score', (myScore: number, yourScore: number) => ({
  myScore,
  yourScore,
}));
export const reset = createAction('[Counter Component] Reset');
