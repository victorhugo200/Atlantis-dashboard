import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-linear-scale',
  templateUrl: './chart-linear-scale.component.html',
  styleUrls: ['./chart-linear-scale.component.scss']
})
export class ChartLinearScaleComponent implements OnInit {


 
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
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
      label: 'A',
      pointRadius: 10,
      backgroundColor: '#ff6384',
      borderColor: '#fff'
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  public scatterChartColors = [
    {
      backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0', '#ffcd56',  '#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#4bc0c0'],
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
