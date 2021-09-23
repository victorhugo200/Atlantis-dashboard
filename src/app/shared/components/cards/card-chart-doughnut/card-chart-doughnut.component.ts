import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-doughnut',
  templateUrl: './card-chart-doughnut.component.html',
  styleUrls: ['./card-chart-doughnut.component.scss']
})
export class CardChartDoughnutComponent implements OnInit {


  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
