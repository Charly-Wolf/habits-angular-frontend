import { HabitService } from './habit.service';
import { Component, OnInit } from '@angular/core';
import Habit from 'src/shared/models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // items: Habit[] = [
  //   new Habit('Learn Angular'),
  //   new Habit('Brush teeth', true),
  //   new Habit('Workout'),
  //   new Habit('Old habit', false, true),
  // ];

  habits: Habit[] = [];

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.getHabits();
  }

  getHabits(): void {
    this.habitService.getHabits().subscribe((habits) => (this.habits = habits));
  }

  addHabit(habitText: string): void {
    habitText = habitText.trim();
    if (!habitText) {
      return;
    }
    this.habitService
      .addHabit(new Habit(habitText))
      .subscribe((newHabitFromBackend) => {
        this.habits.push(newHabitFromBackend);
      });
  }

  filter: any; // Bound to the filter prop on <habit-filter> component
}
