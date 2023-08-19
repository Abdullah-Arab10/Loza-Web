import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseUrl} from 'src/app/shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getStatistics() {
    return this.http.get(`${BaseUrl}statistics/Statistics`);
  }
}
