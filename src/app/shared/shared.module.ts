import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ButtonComponent} from './components/button/button.component';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {AppRoutingModule} from '../app-routing.module';
import {CardTitleComponent} from './components/card-title/card-title.component';
import {InputComponent} from './components/input/input.component';
import {TitleComponent} from './components/title/title.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';
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
    SharedRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    MatExpansionModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    SidebarComponent,
    ButtonComponent,
    CardTitleComponent,
    InputComponent,
    TitleComponent,
    ReactiveFormsModule,
    SpinnerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
