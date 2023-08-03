import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  showError: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private toastr: ToastrService, 
    private router: Router, 
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {

    const { username, email, password } = this.registerForm.value;
    this.registerService.register(username, email, password).pipe(
      catchError(errorConsole => this.errorHandler(errorConsole))
    ).subscribe(response => {
      if (response) {
        this.router.navigate(['../login']);      
      }
    });
  }

  private errorHandler(errorConsole: HttpErrorResponse) {
    this.showError = errorConsole.error.error;

    

    switch (errorConsole.status) {
      case 400:
        this.toastr.error(this.showError, 'Incorrect username');
        break;
      default:
        this.toastr.error(this.showError, 'Unexpected error');
        break;        
    }

    return of(null);
  }
}
