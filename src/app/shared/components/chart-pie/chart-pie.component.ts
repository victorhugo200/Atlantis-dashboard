import { Component, OnInit } from "@angular/core";

import {  ChartType } from 'chart.js';
import { Label } from 'ng2-charts'


@Component({
  selector: "app-chart-pie",
  templateUrl: "./chart-pie.component.html",
  styleUrls: ["./chart-pie.component.scss"],
})
export class ChartPieComponent implements OnInit {


  pieChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    },
  };

  pieChartLabels: Label[] = ['A', 'B', 'C'];

  pieChartData: number[] = [540, 325, 702, 425];

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins = [];

  pieChartColors = [
    
    {
      backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0'],
    },
  ];
 
  constructor() {}
 


  ngOnInit() {}
}
