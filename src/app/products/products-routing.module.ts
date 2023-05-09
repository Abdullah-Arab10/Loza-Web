import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsDashboardComponent} from './products-dashboard/products-dashboard.component';
import {ProductsCreateComponent} from './products-create/products-create.component';
import {ProductsListComponent} from './products-list/products-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {
    path: '',
    children: [
      {path: 'overview', component: ProductsDashboardComponent},
      {path: 'create', component: ProductsCreateComponent},
      {path: 'list', component: ProductsListComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
