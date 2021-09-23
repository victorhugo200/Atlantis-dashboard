import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
