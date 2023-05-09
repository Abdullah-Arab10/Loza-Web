import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {ProductsModule} from './products/products.module';
import {CustomersModule} from './customers/customers.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    AuthModule,
    ProductsModule,
    CustomersModule,
    HomeModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
