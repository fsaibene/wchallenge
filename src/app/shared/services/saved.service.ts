import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedService {
  private savedTechs: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>());
  public savedTechs$: Observable<Array<string>> = this.savedTechs.asObservable();
  constructor() { }

  setTechs(techs: Array<string>){
    this.savedTechs.next(techs);
  }
}
