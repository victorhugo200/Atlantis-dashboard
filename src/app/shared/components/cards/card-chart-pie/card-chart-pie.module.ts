import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartPieComponent } from './card-chart-pie.component';
import { ChartPieModule } from '../../chart-pie/chart-pie.module';

@NgModule({
  declarations: [CardChartPieComponent],
  imports: [
    CommonModule,
    ChartPieModule
  ],
  exports: [ CardChartPieComponent ]
})
export class CardChartPieModule { }
