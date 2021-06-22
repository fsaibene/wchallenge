import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() customError: string = "";
  @Input() needValidate$: Observable<boolean> | null = null;
  constructor() { }

  getMinLengthError(control: AbstractControl): string {
    if(control && control.errors && control.errors.minlength) {
      return control.errors.minlength.requiredLength;
    }
    return "";
  }

  getMaxLengthError(control: AbstractControl): string {
    if(control && control.errors && control.errors.maxlength) {
      return  control.errors.maxlength.requiredLength;
    }
    return "";
  }

  getMinError(control: AbstractControl): string {
    if(control && control.errors && control.errors.min) {
      return  control.errors.min.min;
    }
    return "";
  }

  getMaxError(control: AbstractControl): string {
    if(control && control.errors && control.errors.max) {
      return  control.errors.max.max;
    }
    return "";
  }

}
