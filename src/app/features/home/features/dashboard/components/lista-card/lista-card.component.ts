import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/components/cards/card/card';


@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.scss']
})
export class ListaCardComponent implements OnInit {
  @Input() lista: Card[];
  constructor() { }

  ngOnInit() {
  }

}
