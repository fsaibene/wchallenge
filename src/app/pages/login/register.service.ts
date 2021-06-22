import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { API_URL } from 'src/app/api-url';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    let userData = JSON.stringify(user);

    return this.http.post(API_URL + "signup", userData, {
      headers: this.headers
    })
  }
}
