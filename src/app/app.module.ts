import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// temp
import * as fromCounter from './counter.reducer';
import { MyCounterComponent } from './containers/my-counter.component';

const ENTRY_COMPONENTS = [MyCounterComponent];
const COMPONENTS = [...ENTRY_COMPONENTS];

@NgModule({
  declarations: [AppComponent, COMPONENTS],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ count: fromCounter.reducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
