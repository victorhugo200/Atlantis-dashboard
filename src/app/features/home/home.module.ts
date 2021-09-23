import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardModule } from './features/dashboard/dashboard.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    HeaderModule,
    DashboardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
