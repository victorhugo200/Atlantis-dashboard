import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { TypeImg } from 'src/app/shared/components/cards/card/card';

import { MoeadasService } from 'src/app/shared/services/moeadas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  x: Array<any>;
  constructor(private moedasService: MoeadasService) { }

  ngOnInit() {


    this.moedasService.getCoinsAll()
    .pipe(map(moedas => {
      const EUR = moedas.EUR;
      const CAD = moedas.CAD;
      const USD = moedas.USD;
    
      const formatBTC =  this.formatterConfig('Euro', EUR.pctChange,  'pi pi-arrow-up', 'currency', EUR.high, TypeImg.RED);
      const formatLTC =  this.formatterConfig('Dólar Canadense', CAD.pctChange,  'pi pi-arrow-up', 'currency', CAD.high, TypeImg.GREEN);
      const formatUSD  = this.formatterConfig('Dólar', USD.pctChange,  'pi pi-arrow-up', 'currency', USD.high, TypeImg.BLUE);

     return  [formatBTC, formatLTC, formatUSD];

    }))
    .subscribe(moedas => {
     this.x = moedas;
    });
  }


  formatterConfig(title, fee, icon, type, number, typeImg) {
    return {
      title, 
      fee, 
      icon, 
      type, 
      number, 
      typeImg
    }
  }

}
