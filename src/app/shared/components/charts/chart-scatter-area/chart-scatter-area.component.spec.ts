import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartScatterAreaComponent } from './chart-scatter-area.component';

describe('ChartLinearScaleComponent', () => {
  let component: ChartScatterAreaComponent;
  let fixture: ComponentFixture<ChartScatterAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartScatterAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartScatterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
