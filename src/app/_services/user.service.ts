import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../globals';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.globalService.BASE_API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.globalService.BASE_API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.globalService.BASE_API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.globalService.BASE_API_URL + 'admin', { responseType: 'text' });
  }
}
