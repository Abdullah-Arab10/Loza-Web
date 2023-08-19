import {animate, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {AuthService} from 'src/app/core/services/auth.service';
import {LayoutService} from '../layout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1})),
      ]),
      transition(':leave', [
        // :leave is alias to '* => void'
        animate(500, style({opacity: 0})),
      ]),
    ]),
  ],
})
export class ToolbarComponent {
  menu = false;

  constructor(
    private authService: AuthService,
    private layoutService: LayoutService
  ) {}
  logout() {
    this.authService.logout();
  }
  toggleMenu() {
    this.menu = !this.menu;
  }
  openSidebar() {
    this.layoutService.openSidebar();
  }
}
