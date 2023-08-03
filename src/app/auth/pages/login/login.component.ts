import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse, LoginFormValue } from 'src/app/models/login';
import { HttpErrorResponse } from '@angular/common/http';

enum ErrorStatus {
  IncorrectUsername = 401,
  IncorrectPassword = 402,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showError: string = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value as LoginFormValue;
    this.loginService.login(username, password).pipe(
      catchError((errorConsole) => this.errorHandler(errorConsole))
    ).subscribe((response: LoginResponse | null) => {
      if (response) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      }
    });
  }

  private errorHandler(errorConsole: HttpErrorResponse) {
    this.showError = errorConsole.error.error;

    switch (errorConsole.status) {
      case ErrorStatus.IncorrectUsername:
        this.toastr.error(this.showError, 'Incorrect username');
        break;
      case ErrorStatus.IncorrectPassword:
        this.toastr.error(this.showError, 'Incorrect password');
        break
      default:
        this.toastr.error(this.showError, 'Unexpected error');
        break;        
    }

    return of(null);
  }
}
