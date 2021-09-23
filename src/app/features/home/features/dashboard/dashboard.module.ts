import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { ListaCardModule } from './components/lista-card/lista-card.module';

import { CardChartBarModule } from 'src/app/shared/components/cards/card-chart-bar/card-chart-bar.module';
import { CardChartPieModule } from 'src/app/shared/components/cards/card-chart-pie/card-chart-pie.module';
import { CardChartDoughnutModule } from 'src/app/shared/components/cards/card-chart-doughnut/card-chart-doughnut.module';
import { CardChartScatterAreaModule } from 'src/app/shared/components/cards/card-chart-scatter-area/card-chart-scatter-area.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ListaCardModule,
    CardChartBarModule,
    CardChartPieModule,
    CardChartScatterAreaModule,
    CardChartDoughnutModule,
    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
