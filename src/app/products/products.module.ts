import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsCreateComponent} from './products-create/products-create.component';
import {ProductsDashboardComponent} from './products-dashboard/products-dashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCreateComponent,
    ProductsDashboardComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
