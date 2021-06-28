import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
    import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'techs-list',
    loadChildren: () =>
    import('./pages/techs-list/techs-list.module').then((m) => m.TechsListModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
