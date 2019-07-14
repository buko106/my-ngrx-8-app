import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCounterComponent } from './my-counter.component';

const routes: Routes = [
  { path: 'counter-1', pathMatch: 'full', component: MyCounterComponent },
  { path: 'counter-2', pathMatch: 'full', component: MyCounterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
