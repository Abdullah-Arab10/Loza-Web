import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersMoneyTransferComponent} from './customers-money-transfer/customers-money-transfer.component';

const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {
    path: '',
    children: [
      /*  {path: 'overview', component: ProductsDashboardComponent}, */
      {path: 'transfer', component: CustomersMoneyTransferComponent},
      {path: 'list', component: CustomersListComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
