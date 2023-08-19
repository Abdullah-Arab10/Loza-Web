import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseUrl} from 'src/app/shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(`${BaseUrl}Order/api/Order/GetAllOrders`);
  }
  getReturnOrders() {
    return this.http.get(`${BaseUrl}Returnorder/GetReturnRequestes`);
  }
  handleReturnOrdersRequest(form: any) {
    return this.http.put(`${BaseUrl}Returnorder/ConfirmingRetrunRequest`, form);
  }
}
