import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  error: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const { username, email, password } = this.registerForm.value;
    this.registerService.register(username, email, password).pipe(
      catchError(error => {
        this.error = error.error;
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.router.navigate(['../login']);      
      }
    });
  }
}
