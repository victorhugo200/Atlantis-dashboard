import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartScatterAreaComponent } from './card-chart-scatter-area.component';
import { ChartScatterAreaModule } from '../../charts/chart-scatter-area/chart-scatter-area.module';


@NgModule({
  declarations: [CardChartScatterAreaComponent],
  imports: [
    CommonModule,
    ChartScatterAreaModule
  ],
  exports: [CardChartScatterAreaComponent]
})
export class CardChartScatterAreaModule { }
