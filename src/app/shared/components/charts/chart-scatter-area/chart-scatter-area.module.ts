import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartScatterAreaComponent } from './chart-scatter-area.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartScatterAreaComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartScatterAreaComponent]
})
export class ChartScatterAreaModule { }
