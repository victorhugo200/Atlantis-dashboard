import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-pie',
  templateUrl: './card-chart-pie.component.html',
  styleUrls: ['./card-chart-pie.component.scss']
})
export class CardChartPieComponent implements OnInit {

  @Input() title: string;
  data = [10, 30, 50, 80];

  constructor() { }

  ngOnInit() {
    
    setInterval(() => {
    this.data = this.data.map((numero) => {
     const  result = ((numero / 100) * 80).toFixed(2);
     return +result;
    });
    }, 15000)
  }

}
