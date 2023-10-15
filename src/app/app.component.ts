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
    events.listen('toggleArchiveHabit', (habit: Habit) => {
      this.toggleArchiveHabit(habit);
    });
    events.listen('deleteHabit', (habit: Habit) => {
      this.deleteHabit(habit);
    });
    events.listen('toggleDone', (habit: Habit) => {
      this.toggleHabitDone(habit);
    });
    // TODO: Edit name
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

  toggleArchiveHabit(habit: Habit): void {
    // DO I need this and toggle done or can I just unify them in updateHabit()?
    // TODO: Handle errors
    this.habitService.updateHabit(habit).subscribe();
  }

  deleteHabit(habit: Habit): void {
    // TODO: Handle errors
    this.habitService.deleteHabit(habit).subscribe();
    // Remove habit from Frontend
    let index = this.habits.indexOf(habit);
    this.habits.splice(index, 1);
  }

  sortHabitsByText(): void {
    this.habits.sort((a: Habit, b: Habit) =>
      a.habitText.localeCompare(b.habitText)
    );
  }

  toggleHabitDone(habit: Habit): void {
    // TODO: Handle errors
    this.habitService.updateHabit(habit).subscribe();
  }

  filter: any; // Bound to the filter prop on <habit-filter> component
}
