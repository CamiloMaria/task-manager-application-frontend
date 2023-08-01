import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = '';
  endopoint = environment.apiUrl;

  constructor(protected http: HttpClient) { 
    this.url = `${this.endopoint}/users/login `
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.url, { username, password });
  }
}
