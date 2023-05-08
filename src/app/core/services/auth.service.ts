import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginRequestModel} from '../models/login.model';
import {BehaviorSubject, Subject, map, tap} from 'rxjs';
import * as moment from 'moment';
import {NotificationService} from './themes/notification.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginSubject = new BehaviorSubject(this.isLoggedIn());
  login$ = this.loginSubject.asObservable();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  public login(request: ILoginRequestModel) {
    return this.http
      .post('https://loza-api.azurewebsites.net/Auth/Login', request)
      .pipe()
      .subscribe((res) => {
        this.setSession(res);
        this.notificationService.showSuccess('Login Successfully !');
      });
  }
  private setSession(authResult: any) {
    const expiresAt = moment().add('3600', 'second');
    localStorage.setItem('access_token', authResult.data[0].token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    this.loginSubject.next(true);
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.loginSubject.next(false);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = expiration ? JSON.parse(expiration) : '0s';
    return moment(expiresAt);
  }
}
