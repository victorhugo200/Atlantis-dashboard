import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() config: Card;
  numero = 0.081;
  constructor() {
   
   }

  ngOnInit() {
  }

}
