import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from '../login/guards/logged.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent, canActivate: [LoggedGuard] }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
