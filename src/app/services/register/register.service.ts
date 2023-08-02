import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url: string = '';
  endpoint = environment.apiUrl;

  constructor(protected http: HttpClient) { 
    this.url = `${this.endpoint}/users/register`
  }

  register(username: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this.url, { username, email, password });
  }
}
