import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { TechsListComponent } from './techs-list/techs-list.component';

const routes: Routes = [{ path: '', component: TechsListComponent, canActivate: [NotLoggedGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechsListRoutingModule { }
