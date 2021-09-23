import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent implements OnInit {

  doughnutChartLabels: Label[] = ['A', 'B', 'C'];
  doughnutChartData: MultiDataSet = [
    [53, 30, 17]
  ];
  doughnutChartType: ChartType = 'doughnut';
  pieChartColors = [
    
    {
      backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
