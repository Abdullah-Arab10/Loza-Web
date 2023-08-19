import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private sidebar$ = new BehaviorSubject(false);
  sidebarState$ = this.sidebar$.asObservable();
  constructor() {}
  openSidebar() {
    this.sidebar$.next(!this.sidebar$.value);
  }
}
