import { HabitService } from '../shared/services/habit.service';
import { Component, OnInit } from '@angular/core';
import Habit from 'src/shared/models/habit';
import events from './../shared/services/EventService'

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

  constructor(private habitService: HabitService) {
    events.listen('archiveHabit', (habit: any) => {
      // todo archive habit

      console.log(habit);
    })
  }

  ngOnInit(): void {
    this.getHabits();
  }

  getHabits(): void {
    this.habitService.getHabits().subscribe((habits) => {
      this.habits = habits;
      this.sortHabitsByText();
    });
  }

  addHabit(habitText: string): void {
    habitText = habitText.trim();
    if (!habitText) {
      return;
    }
    this.habitService
      .addHabit(new Habit(null, habitText))
      .subscribe((newHabitFromBackend) => {
        this.habits.push(newHabitFromBackend);
        this.sortHabitsByText();
      });
  }

  sortHabitsByText(): void {
    this.habits.sort((a: Habit, b: Habit) =>
      a.habitText.localeCompare(b.habitText)
    );
  }

  filter: any; // Bound to the filter prop on <habit-filter> component
}
