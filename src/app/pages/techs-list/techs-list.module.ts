import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechsListRoutingModule } from './techs-list-routing.module';
import { TechsListComponent } from './techs-list/techs-list.component';


@NgModule({
  declarations: [
    TechsListComponent
  ],
  imports: [
    CommonModule,
    TechsListRoutingModule
  ]
})
export class TechsListModule { }
