import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartDoughnutComponent } from './card-chart-doughnut.component';
import { ChartDoughnutModule } from '../../chart-doughnut/chart-doughnut.module';

@NgModule({
  declarations: [CardChartDoughnutComponent],
  imports: [
    CommonModule,
    ChartDoughnutModule
  ],
  exports: [ CardChartDoughnutComponent ]
})
export class CardChartDoughnutModule { }
