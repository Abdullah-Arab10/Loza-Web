import {Component, OnInit} from '@angular/core';
import {OrderService} from 'src/app/core/services/http/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  columns = [
    {name: 'User Address', field: 'useraddress', isDate: false},
    {name: 'State', field: 'state', isDate: false},
    {name: 'Order Date', field: 'orderdate', isDate: true},
  ];
  orders = [];

  constructor(private _orderService: OrderService) {}
  ngOnInit(): void {
    this.getOrders();
  }
  private getOrders() {
    this._orderService.getOrders().subscribe((res: any) => {
      res.data.AllOrders.map(
        (order: any) =>
          (order.state = order?.isDelivered ? 'Delivered' : 'Not Delivered')
      );
      this.orders = res.data.AllOrders;
    });
  }
}
