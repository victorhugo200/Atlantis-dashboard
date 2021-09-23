import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeImg } from '../components/cards/card/card';
import { MoedasModel } from '../models/moedas.model';
const API = 'https://economia.awesomeapi.com.br/json';
@Injectable({
  providedIn: 'root'
})
export class MoeadasService {

  constructor(private http: HttpClient) { }


  getCoinsAll(): Observable<MoedasModel> {
    return this.http.get<MoedasModel>(API + '/all');
  }

  getCoinsUsdCadEur(){
    return this.http.get<MoedasModel>(API + '/all')
    .pipe(map(moedas => {
      const EUR = moedas.EUR;
      const CAD = moedas.CAD;
      const USD = moedas.USD;
    
      const formatBTC =  this.formatterConfig('Euro', EUR.pctChange,  'pi pi-arrow-up', 'currency', EUR.high, TypeImg.RED);
      const formatLTC =  this.formatterConfig('Dólar Canadense', CAD.pctChange,  'pi pi-arrow-up', 'currency', CAD.high, TypeImg.GREEN);
      const formatUSD  = this.formatterConfig('Dólar', USD.pctChange,  'pi pi-arrow-up', 'currency', USD.high, TypeImg.BLUE);
      return  [formatBTC, formatLTC, formatUSD];
    }));
  }

 private  formatterConfig(title, fee, icon, type, number, typeImg) {
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
