import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomersService} from 'src/app/core/services/http/customers.service';

@Component({
  selector: 'app-customers-money-transfer',
  templateUrl: './customers-money-transfer.component.html',
  styleUrls: ['./customers-money-transfer.component.scss'],
})
export class CustomersMoneyTransferComponent implements OnInit {
  transferForm: FormGroup;
  constructor(private _customersService: CustomersService) {}
  ngOnInit(): void {
    this.initTransferForm();
  }
  private initTransferForm() {
    this.transferForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      cash: new FormControl(0, [Validators.required]),
    });
  }
  transfer() {
    this.transferForm.markAllAsTouched();
    if (this.transferForm.valid) {
      this._customersService
        .transferMoney(this.transferForm.value)
        .subscribe((res) => {});
    }
  }
}
