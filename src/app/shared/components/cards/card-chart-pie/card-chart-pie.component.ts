import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-pie',
  templateUrl: './card-chart-pie.component.html',
  styleUrls: ['./card-chart-pie.component.scss']
})
export class CardChartPieComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
