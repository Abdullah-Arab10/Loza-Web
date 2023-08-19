import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable, Query} from '@angular/core';
import {BaseUrl} from 'src/app/shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(product: any) {
    return this.http.post(`${BaseUrl}Product`, product);
  }

  getProducts(page?: any, search?: any, sort?: any) {
    let params = new HttpParams();
    params = params
      .append('Search', search || '')
      .append('sort', sort || '')
      .append('page', page || 1);
    return this.http.get(`${BaseUrl}Product/api/Product/GetProducts`, {
      params: params,
    });
  }
  deleteProducts(productArray: number[]) {
    return this.http.delete(`${BaseUrl}Product`, {
      body: productArray,
    });
  }
}
