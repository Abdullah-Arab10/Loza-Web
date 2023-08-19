import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrdersReturnListComponent} from './orders-return-list/orders-return-list.component';

const routes: Routes = [
  // {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {
    path: '',
    children: [
      //  {path: 'overview', component:  },
      {path: 'list', component: OrdersListComponent},
      {path: 'returns-list', component: OrdersReturnListComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
