import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitFormComponent } from './add-habit-form.component';

describe('AddHabitFormComponent', () => {
  let component: AddHabitFormComponent;
  let fixture: ComponentFixture<AddHabitFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHabitFormComponent]
    });
    fixture = TestBed.createComponent(AddHabitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
