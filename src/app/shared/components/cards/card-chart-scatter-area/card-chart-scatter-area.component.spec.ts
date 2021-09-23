import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartScatterAreaComponent } from './card-chart-scatter-area.component';

describe('CardChartScatterAreaComponent', () => {
  let component: CardChartScatterAreaComponent;
  let fixture: ComponentFixture<CardChartScatterAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChartScatterAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartScatterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
