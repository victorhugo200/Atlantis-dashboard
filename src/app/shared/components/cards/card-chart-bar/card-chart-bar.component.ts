import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-bar',
  templateUrl: './card-chart-bar.component.html',
  styleUrls: ['./card-chart-bar.component.scss']
})
export class CardChartBarComponent implements OnInit {
  @Input() title: string;
  @Input() chartData = [
    { data: [5500, 5900, 6000, 8100, 8600, 8050, 7200], label: 'Company A', backgroundColor: '#ff6384', borderColor: '#fff' },
    { data: [4800, 4800, 4600, 7900, 9600, 8870, 9400], label: 'Company B',  backgroundColor: '#36a2eb', borderColor: '#fff' }
  ]

  constructor() { }

  ngOnInit() {
   
  }

}
