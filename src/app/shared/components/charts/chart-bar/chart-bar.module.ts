import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBarComponent } from './chart-bar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartBarComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartBarComponent]
})
export class ChartBarModule { }
