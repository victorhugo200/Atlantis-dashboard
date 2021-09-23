import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChartBarComponent } from './card-chart-bar.component';
import { ChartBarModule } from '../../chart-bar/chart-bar.module';

@NgModule({
  declarations: [CardChartBarComponent],
  imports: [
    CommonModule,
    ChartBarModule
  ],
  exports: [CardChartBarComponent]
})
export class CardChartBarModule { }
