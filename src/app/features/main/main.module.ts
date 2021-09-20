import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HeaderModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
