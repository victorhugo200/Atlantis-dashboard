import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCardComponent } from './lista-card.component';
import { CardModule } from 'src/app/shared/components/cards/card/card.module';



@NgModule({
  declarations: [ListaCardComponent],
  imports: [
    CommonModule,
    CardModule,
  ],
  exports: [ListaCardComponent]
})
export class ListaCardModule { }
