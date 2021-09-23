import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLinearScaleComponent } from './chart-linear-scale.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartLinearScaleComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartLinearScaleComponent]
})
export class ChartLinearScaleModule { }
