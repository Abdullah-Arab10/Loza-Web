import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseUrl} from 'src/app/shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(`${BaseUrl}User/Get_all_Users`);
  }
  blockCustomers(usersID: any) {
    return this.http.delete(`${BaseUrl}User/Block`, {
      body: usersID,
    });
  }
  transferMoney(form: any) {
    return this.http.post(`${BaseUrl}User/Add_Money_to_user`, form);
  }
}
