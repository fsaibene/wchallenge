import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechsListComponent } from './techs-list/techs-list.component';

const routes: Routes = [{ path: '', component: TechsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechsListRoutingModule { }
