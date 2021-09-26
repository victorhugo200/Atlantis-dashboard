import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { DataBar } from 'src/app/shared/models/chart-bar.model';

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

  @Input() barChartData: Array<DataBar>;

  constructor() { }

  ngOnInit() {

  }

}
