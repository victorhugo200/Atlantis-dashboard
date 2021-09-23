import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLinearScaleComponent } from './chart-linear-scale.component';

describe('ChartLinearScaleComponent', () => {
  let component: ChartLinearScaleComponent;
  let fixture: ComponentFixture<ChartLinearScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLinearScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLinearScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
