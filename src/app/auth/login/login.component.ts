import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/core/services/auth.service';
import {PASSWORD_REGEX} from 'src/app/shared/constants/regex.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.initLoginFormGroup();
    this.loginForm.valueChanges.subscribe((ch) => console.log('changes', ch));
  }
  public submit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    let loginFormValues = this.loginForm.value;
    let result = this.authService.login(loginFormValues);
  }
  private initLoginFormGroup() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(PASSWORD_REGEX),
      ]),
    });
  }
}
