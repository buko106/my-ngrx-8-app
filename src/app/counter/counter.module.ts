import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CounterRoutingModule } from './counter-routing.module';
import * as fromCounter from './counter.reducer';
import { MyCounterComponent } from './my-counter.component';

@NgModule({
  imports: [CommonModule, CounterRoutingModule, StoreModule.forFeature('count', fromCounter.reducer)],
  declarations: [MyCounterComponent],
})
export class CounterModule {}
