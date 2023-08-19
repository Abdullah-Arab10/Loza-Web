import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from 'src/app/core/services/http/order.service';

@Component({
  selector: 'app-orders-return-list',
  templateUrl: './orders-return-list.component.html',
  styleUrls: ['./orders-return-list.component.scss'],
})
export class OrdersReturnListComponent implements OnInit {
  columns = [
    {name: 'Order Id', field: 'order_Id', isDate: false},
    {name: 'Request Id', field: 'request_Id', isDate: false},
    {name: 'State', field: 'state', isDate: false},
    {name: 'Reason', field: 'reason', isDate: false},
  ];
  orders = [];
  handleOrderReturnRequestForm: FormGroup;
  constructor(private _ordersService: OrderService) {}

  ngOnInit(): void {
    this.getReturnOrders();
    this.inithandleOrderReturnRequestForm();
  }
  inithandleOrderReturnRequestForm() {
    this.handleOrderReturnRequestForm = new FormGroup({
      roId: new FormControl(0),
      isConfirmed: new FormControl(false),
    });
  }
  getReturnOrders() {
    this._ordersService.getReturnOrders().subscribe((res: any) => {
      res.data.ReturnRequests.map((order: any) => {
        order.state =
          !order.isConfirmed && !order.isRejected
            ? 'Not Decided'
            : order.isConfirmed
            ? 'Confirmed'
            : 'Rejected';
      });
      this.orders = res.data.ReturnRequests;
    });
  }
  returnOrderRequest(event: any) {
    this.handleOrderReturnRequestForm.patchValue({
      roId: event.item.request_Id,
      isConfirmed: event.accept,
    });
    this._ordersService
      .handleReturnOrdersRequest(this.handleOrderReturnRequestForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }
}
