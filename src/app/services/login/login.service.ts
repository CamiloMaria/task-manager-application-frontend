import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = '';
  endopoint = environment.apiUrl;

  constructor(protected http: HttpClient) { 
    this.url = `${this.endopoint}/login `
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { username, password });
  }
}
