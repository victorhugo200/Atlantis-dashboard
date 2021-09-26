import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDoughnutComponent } from './chart-doughnut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartDoughnutComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ChartDoughnutComponent
  ]
})
export class ChartDoughnutModule { }
