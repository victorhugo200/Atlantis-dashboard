import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';

import { DashboardModule } from './features/dashboard/dashboard.module';

import { HeaderModule } from 'src/app/shared/components/structure/header/header.module';
import { FooterModule } from 'src/app/shared/components/structure/footer/footer.module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    HeaderModule,
    DashboardModule,
    FooterModule,
    AlertModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
