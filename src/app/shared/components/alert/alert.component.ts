import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() text = 'Este site é utilizado apenas para praticar os estudos realizados academicamente.';
  @Input() openAlert = false;
  constructor() { }

  ngOnInit() {
  }

}
