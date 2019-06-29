import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

const routes: Routes = [{
  path: 'customers',
  component: CustomersListComponent
},
{
  path: 'orders',
  component: OrdersListComponent
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
