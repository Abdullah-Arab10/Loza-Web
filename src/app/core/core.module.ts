import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoadingInterceptor} from './interceptors/loading.interceptor';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule],
  providers: [
    // singleton services
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
