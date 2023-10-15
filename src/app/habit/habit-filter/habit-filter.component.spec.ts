import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitFilterComponent } from './habit-filter.component';

describe('HabitFilterComponent', () => {
  let component: HabitFilterComponent;
  let fixture: ComponentFixture<HabitFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabitFilterComponent]
    });
    fixture = TestBed.createComponent(HabitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
