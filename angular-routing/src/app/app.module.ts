import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
