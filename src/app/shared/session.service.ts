import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public logged$: Observable<boolean> = this.logged.asObservable();
  constructor() { }

  setUser(token: string): void {
    if(token){
      this.logged.next(true);
    }
    localStorage.setItem('user', token);
  }

  getUser() {
    let token = localStorage.getItem('user');
    if (token != undefined) {
        return token;
    }
    return null;
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('user');
    return token != undefined;
  }

  logout() {
    this.logged.next(false);
    localStorage.removeItem("user");
  }
}
