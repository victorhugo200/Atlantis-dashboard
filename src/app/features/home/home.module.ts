import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';

import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeaderModule } from 'src/app/shared/components/structure/header/header.module';


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
