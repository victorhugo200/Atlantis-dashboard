import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-card-chart-scatter-area',
  templateUrl: './card-chart-scatter-area.component.html',
  styleUrls: ['./card-chart-scatter-area.component.scss']
})
export class CardChartScatterAreaComponent implements OnInit {

  @Input() title: string;
  @Input() chartData: ChartDataSets[] =  [
    {
      data: [
        { x: 14.2, y: 215 },
        { x: 16.4, y: 325 },
        { x: 11.9, y: 185 },
        { x: 15.2, y: 332 },
        { x: 18.5, y: 406 },
        { x: 22.1, y: 522 },
        { x: 19.4, y: 412 },
        { x: 25.1, y: 614 },
        { x: 23.4, y: 544 },
        { x: 18.1, y: 421 },
      ],
      label: "A",
      pointRadius: 10,
      backgroundColor: "#ff6384",
      borderColor: "#fff",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
