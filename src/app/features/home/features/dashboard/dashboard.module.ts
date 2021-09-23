import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListaCardModule } from './components/lista-card/lista-card.module';
import { ChartPieModule } from 'src/app/shared/components/chart-pie/chart-pie.module';
import { ChartBarModule } from 'src/app/shared/components/chart-bar/chart-bar.module';
import { ChartDoughnutModule } from 'src/app/shared/components/chart-doughnut/chart-doughnut.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ListaCardModule,
    ChartPieModule,
    ChartBarModule,
    ChartDoughnutModule
    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
