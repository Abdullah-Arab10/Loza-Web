import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {NotificationService} from '../services/themes/notification.service';
import {IErrorModel} from '../models/error.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMsg = '';
        errorResponse.error?.errors?.forEach((err: IErrorModel) => {
          this.notificationService.showError(err.message);
        });
        return throwError(errorMsg);
      })
    );
  }
}
