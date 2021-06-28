import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/api-url';
import { Tech } from '../model/tech';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private readonly TECH_PATH: string = "techs";
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(API_URL + this.TECH_PATH, {
      headers: this.headers
    })
  }}
