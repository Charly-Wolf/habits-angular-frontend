import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitDetailsComponent } from './habitDetails.component';

describe('HabitdetailsComponent', () => {
  let component: HabitDetailsComponent;
  let fixture: ComponentFixture<HabitDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabitDetailsComponent],
    });
    fixture = TestBed.createComponent(HabitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
