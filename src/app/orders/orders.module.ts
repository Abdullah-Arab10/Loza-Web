import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrdersReturnListComponent} from './orders-return-list/orders-return-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [OrdersListComponent, OrdersReturnListComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
