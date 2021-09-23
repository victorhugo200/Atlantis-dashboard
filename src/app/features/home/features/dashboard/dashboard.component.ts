import { Component, OnInit } from "@angular/core";

import { distinctUntilChanged, map } from "rxjs/operators";
import { TypeImg } from "src/app/shared/components/cards/card/card";

import { MoeadasService } from "src/app/shared/services/moeadas.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  x: Array<any>;
  constructor(private moedasService: MoeadasService) {}

  ngOnInit() {
    this.moedasService.getCoinsUsdCadEur().subscribe((moedas) => {
      this.x = moedas;
    });

    setInterval(() => {
      this.moedasService.getCoinsUsdCadEur()
      .pipe(distinctUntilChanged())
      .subscribe((moedas) => {
        this.x = moedas;
      });
    }, 20000);
  }
}
