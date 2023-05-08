import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from '../products/products-list/products-list.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    redirectTo: 'products/overview',
  },
  {path: 'customers', component: ProductsListComponent},
  {path: 'properties', component: ProductsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
