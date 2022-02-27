import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.globalService.BASE_API_URL + 'auth/login', {
      email,
      password
    }, httpOptions);
  }

  register(name: string, email: string, password: string, password_confirmation: string): Observable<any> {
    return this.http.post(this.globalService.BASE_API_URL + 'auth/register', {
      name,
      email,
      password,
      password_confirmation
    }, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.get(this.globalService.BASE_API_URL + 'auth/logout', httpOptions);
  }
}
