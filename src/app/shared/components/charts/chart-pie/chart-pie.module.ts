import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartPieComponent } from './chart-pie.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ChartPieComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartPieComponent]
})
export class ChartPieModule { }
