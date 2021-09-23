import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material';
import { ChartsModule, ThemeService } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt'},
    ThemeService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
