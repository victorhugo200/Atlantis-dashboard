import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-card-chart-doughnut',
  templateUrl: './card-chart-doughnut.component.html',
  styleUrls: ['./card-chart-doughnut.component.scss']
})
export class CardChartDoughnutComponent implements OnInit {


  @Input() title: string;
  @Input() charData: MultiDataSet;
  constructor() { }

  ngOnInit() {
  }

}
