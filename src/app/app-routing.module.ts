import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './containers/my-counter.component';

const routes: Routes = [
  { path: 'counter-1', pathMatch: 'full', component: MyCounterComponent },
  { path: 'counter-2', pathMatch: 'full', component: MyCounterComponent },
  { path: '**', redirectTo: 'counter-1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
