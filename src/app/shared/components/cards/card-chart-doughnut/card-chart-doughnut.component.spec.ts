import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartDoughnutComponent } from './card-chart-doughnut.component';

describe('CardChartDoughnutComponent', () => {
  let component: CardChartDoughnutComponent;
  let fixture: ComponentFixture<CardChartDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChartDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
