import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { RegisterService } from '../register.service';
import { take } from 'rxjs/operators'
import { COUNTRIES, Country } from './countries';
import { SessionService } from 'src/app/shared/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public fg: FormGroup;
  public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public needValidate$: Observable<boolean> = this.needValidate.asObservable();
  public disableButton: boolean = false;
  public countries = COUNTRIES;
  public selectedCountry: Country | null = null;
  
  constructor(private fb: FormBuilder, private router: Router, 
    private spinnerService: NgxSpinnerService,
    private sessionService: SessionService,
    private registerService: RegisterService) { 
      this.fg =  this.fb.group({
        'firstName': ['', [Validators.required, Validators.maxLength(30)]],
        'lastName': ['', [Validators.required, Validators.maxLength(30)]],
        'country': ['', [Validators.required]],
        'province': ['', [Validators.required]],
        'phone': ['', [Validators.required, Validators.max(999999999)]],
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required]],
    });
  }

  private signUp(newUser: User) {
    this.registerService.signUp(newUser).pipe(take(1)).subscribe((response) => {
      console.log(response)
      this.spinnerService.hide();
      this.disableButton = false;
      this.sessionService.setUser(response["token"])
      this.router.navigate(["home"]);
    });
  }

  private createUserFromControls(): User | null{
    if(this.fg) {
      let newUser = {} as User;
      newUser.firstName = this.fg.controls["firstName"].value;
      newUser.lastName = this.fg.controls["lastName"].value;
      newUser.country = this.fg.controls["country"].value;
      newUser.province = this.fg.controls["province"].value;
      newUser.phone = this.fg.controls["phone"].value;
      newUser.email = this.fg.controls["email"].value;
      newUser.password = this.fg.controls["password"].value;
      return newUser;
    }
    return null;
  }

  getProvinces(): string[] {
    if(this.selectedCountry){
      return this.selectedCountry.provinces;
    }
    return new Array<string>();
  }

  onChangeCountry(event: any){
    if(event && event.target && event.target.value)
    var selected = this.countries.find(c => c.name == event.target.value);
    if(selected) {
      this.selectedCountry = selected;
      this.fg.controls["province"].setValue(selected.provinces[0]);
    }
  }
  
  public onSubmit(form: FormGroup | null): void {
    if(form){
      this.needValidate.next(true);
      if(form.valid) {
        let newUser = this.createUserFromControls();
        if(newUser){
          this.spinnerService.show();
          this.disableButton = true;
          this.signUp(newUser);
        }
      }
    }
  }
}
        