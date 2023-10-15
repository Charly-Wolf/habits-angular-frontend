import { HabitService } from '../shared/services/habit.service';
import { Component, OnInit } from '@angular/core';
import Habit from 'src/shared/models/habit';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private habitService: HabitService, events: EventService) {
    events.listen('archiveHabit', (habit: Habit) => {
      // TODO: archive habit in DB (PUT)
      console.log(`Archived ${habit.habitText}`);
    });
    events.listen('deleteHabit', (habit: Habit) => {
      // TODO: delete habit in DB (DELETE)
      let index = this.habits.indexOf(habit);
      this.habits.splice(index, 1); // Remove habit from Frontend
      console.log(`Deleted ${habit.habitText}`);
    });
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
