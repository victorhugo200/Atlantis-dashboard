import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartPieComponent } from './card-chart-pie.component';

describe('CardChartPieComponent', () => {
  let component: CardChartPieComponent;
  let fixture: ComponentFixture<CardChartPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChartPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
