import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {SharedModule} from '../shared/shared.module';
import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersMoneyTransferComponent} from './customers-money-transfer/customers-money-transfer.component';

@NgModule({
  declarations: [CustomersListComponent, CustomersMoneyTransferComponent],
  imports: [CommonModule, SharedModule, CustomersRoutingModule],
})
export class CustomersModule {}
