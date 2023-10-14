import { Component, Output, EventEmitter } from '@angular/core';
import Habit from 'src/shared/models/habit';

@Component({
  selector: 'add-habit-form',
  templateUrl: './add-habit-form.component.html',
  styleUrls: ['./add-habit-form.component.css'],
})
export class AddHabitFormComponent {
  @Output() addHabit = new EventEmitter<Habit>();

  newHabitText: string = '';

  addNewHabit() {
    this.addHabit.emit(new Habit(this.newHabitText));
    this.newHabitText = '';
  }
}
