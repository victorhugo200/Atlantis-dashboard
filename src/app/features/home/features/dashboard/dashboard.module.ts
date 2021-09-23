import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListaCardModule } from './components/lista-card/lista-card.module';
import { ChartPieModule } from 'src/app/shared/components/chart-pie/chart-pie.module';
import { ChartBarModule } from 'src/app/shared/components/chart-bar/chart-bar.module';
import { ChartDoughnutModule } from 'src/app/shared/components/chart-doughnut/chart-doughnut.module';
import { ChartLinearScaleModule } from 'src/app/shared/components/chart-linear-scale/chart-linear-scale.module';
import { CardChartBarModule } from 'src/app/shared/components/cards/card-chart-bar/card-chart-bar.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ListaCardModule,
    CardChartBarModule,
    ChartPieModule,
    ChartBarModule,
    ChartDoughnutModule,
    ChartLinearScaleModule
    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
