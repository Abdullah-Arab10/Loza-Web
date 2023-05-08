import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import {LoadingService} from './core/services/themes/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Loza-Web';
  signedIn: boolean = false;
  loading: boolean = false;
  constructor(
    private authService: AuthService,
    private route: Router,
    private loadingService: LoadingService
  ) {}
  ngOnInit(): void {
    this.authService.login$.subscribe((res) => {
      this.signedIn = res;
      this.signedIn
        ? this.route.navigate(['/home'])
        : this.route.navigate(['/auth']);
    });
    this.loadingService.loading$.subscribe((res) => (this.loading = res));
  }
}
