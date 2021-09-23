import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-scatter-area',
  templateUrl: './card-chart-scatter-area.component.html',
  styleUrls: ['./card-chart-scatter-area.component.scss']
})
export class CardChartScatterAreaComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
