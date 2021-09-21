import { Component, OnInit } from '@angular/core';
import { TypeImg } from 'src/app/shared/components/card/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  x = [
    {
      title: 'CONVERSATION RATE',
      fee: 0.061,
      icon: 'pi-arrow-down',
      type: 'percent',
      number: 0.080,
      typeImg: TypeImg.RED
    },
    {
      title: 'AVG. ORDER VALUE',
      fee: 0.0101,
      icon: 'pi-arrow-down',
      type: 'currency',
      number: 0.080,
      typeImg: TypeImg.GREEN
    },
    {
      title: 'ORDER QUANTITY',
      fee: 0.0201,
      icon: 'pi-arrow-down',
      type: 'currency',
      number: 200,
      typeImg: TypeImg.BLUE
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
