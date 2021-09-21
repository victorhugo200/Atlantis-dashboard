import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListaCardModule } from './components/lista-card/lista-card.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ListaCardModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
