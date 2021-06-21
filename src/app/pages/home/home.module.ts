import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CompleteComponent } from './components/complete/complete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    WoloxersComponent,
    BenefitsComponent,
    CompleteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
