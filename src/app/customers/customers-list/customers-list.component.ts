import {Component, OnInit} from '@angular/core';
import {CustomersService} from 'src/app/core/services/http/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  columns = [
    {name: 'First Name', field: 'firstName', isDate: false},
    {name: 'Last Name', field: 'lastName', isDate: false},
    {name: 'Email', field: 'email', isDate: false},
    {name: 'Phone', field: 'phoneNumber', isDate: false},
    {name: 'Date of birth', field: 'dateOfBirth', isDate: false},
    {name: 'Address', field: 'address', isDate: false},
  ];
  customers = [];
  constructor(private _customersService: CustomersService) {}
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this._customersService.getCustomers().subscribe((res: any) => {
      this.customers = res?.data?.users || [];
    });
  }
  blockUsers(items: any) {
    let itemsForDelete = items?.map((item: any) => item.id);

    this._customersService.blockCustomers(itemsForDelete).subscribe((res) => {
      this.ngOnInit();
    });
  }
}
