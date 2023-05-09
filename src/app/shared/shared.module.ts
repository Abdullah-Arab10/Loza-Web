import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ButtonComponent} from './components/button/button.component';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CardTitleComponent} from './components/card-title/card-title.component';
import {InputComponent} from './components/input/input.component';
import {TitleComponent} from './components/title/title.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    SidebarComponent,
    ButtonComponent,
    ToolbarComponent,
    CardTitleComponent,
    InputComponent,
    TitleComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    AngularSvgIconModule.forRoot(),
    MatExpansionModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    ButtonComponent,
    CardTitleComponent,
    InputComponent,
    TitleComponent,
    ReactiveFormsModule,
    SpinnerComponent,
    AngularSvgIconModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    NgxSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
