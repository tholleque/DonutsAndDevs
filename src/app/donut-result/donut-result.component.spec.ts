import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutResultComponent } from './donut-result.component';

describe('DonutResultComponent', () => {
  let component: DonutResultComponent;
  let fixture: ComponentFixture<DonutResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutResultComponent]
    });
    fixture = TestBed.createComponent(DonutResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
