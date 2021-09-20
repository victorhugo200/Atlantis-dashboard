import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
