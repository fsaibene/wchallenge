import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechsListRoutingModule } from './techs-list-routing.module';
import { TechsListComponent } from './techs-list/techs-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TechsListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TechsListRoutingModule,
    FontAwesomeModule
  ]
})
export class TechsListModule { }
