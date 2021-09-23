import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-bar',
  templateUrl: './card-chart-bar.component.html',
  styleUrls: ['./card-chart-bar.component.scss']
})
export class CardChartBarComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
