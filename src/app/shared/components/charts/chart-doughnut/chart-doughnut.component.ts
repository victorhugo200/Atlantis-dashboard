import { Component, Input, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { Label, MultiDataSet } from "ng2-charts";

@Component({
  selector: "app-chart-doughnut",
  templateUrl: "./chart-doughnut.component.html",
  styleUrls: ["./chart-doughnut.component.scss"],
})
export class ChartDoughnutComponent implements OnInit {
  @Input() labels: Label[] = ["A", "B", "C"];
  @Input() data: MultiDataSet = [[53, 30, 17]];
  doughnutChartType: ChartType = "doughnut";
  doughnutChartColors = [
    {
      backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56", "#4bc0c0"],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
