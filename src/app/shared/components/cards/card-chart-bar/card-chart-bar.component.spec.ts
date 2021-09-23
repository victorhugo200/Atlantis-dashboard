import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartBarComponent } from './card-chart-bar.component';

describe('CardChartBarComponent', () => {
  let component: CardChartBarComponent;
  let fixture: ComponentFixture<CardChartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
