import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsListComponent} from './products-list/products-list.component';
import {AppModule} from '../app.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import {MatOptionModule} from '@angular/material/core';
import {ProductsCreateComponent} from './products-create/products-create.component';
import {ProductsDashboardComponent} from './products-dashboard/products-dashboard.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsCreateComponent,
    ProductsDashboardComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
  ],
})
export class ProductsModule {}
