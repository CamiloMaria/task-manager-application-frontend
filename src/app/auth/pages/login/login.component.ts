import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm!: FormGroup;
  error: string = '';
  
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) 
  {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    this.loginService.login(username, password).pipe(
      catchError(error => {
        if (error.error) {
          this.error = error.error;
          console.error('Backend Error:', error.error); // Log the error in the console
        } else {
          this.error = 'An unexpected error occurred. Please try again later.';
          console.error('Unexpected Error:', error); // Log the unexpected error in the console
        }
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);      
      }
    });
  }
}
