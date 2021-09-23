import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  @Input() barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  @Input() barChartData = [
    { data: [5500, 5900, 6000, 8100, 8600, 8050, 7200], label: 'Company A', backgroundColor: '#ff6384', borderColor: '#fff' },
    { data: [4800, 4800, 4600, 7900, 9600, 8870, 9400], label: 'Company B',  backgroundColor: '#36a2eb', borderColor: '#fff' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
