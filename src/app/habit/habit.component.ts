import { Component, OnInit } from '@angular/core';
import { EventService } from './../../shared/services/event.service';
import { HabitService } from './habit.service';
import Habit from 'src/shared/models/habit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent implements OnInit {
  habits: Habit[] = [];

  constructor(
    private habitService: HabitService,
    events: EventService,
    private router: Router
  ) {
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
    this.habitService.getHabits().subscribe( // TODO: Replace deprecated with next: err: ...
      (habits: Habit[]) => {
        this.habits = habits;
        this.sortHabitsByText();
      },
      (error: any) => {
        alert(error.message); // TODO: Display a nice and clear error message
      }
    );
  }

  addHabit(habitText: string): void {
    habitText = habitText.trim();
    if (!habitText) {
      return;
    }
    const newHabit: Habit = new Habit(null, habitText);
    this.habitService
      // Add habit to the Backend
      .addHabit(newHabit)
      .subscribe();
    // Add habit to the Frontend
    this.habits.push(newHabit);
    this.sortHabitsByText();
  }

  toggleArchiveHabit(habit: Habit): void {
    // DO I need this and toggle done or can I just unify them in updateHabit()?
    // TODO: Handle errors
    this.habitService.updateHabit(habit).subscribe();
  }

  deleteHabit(habit: Habit): void {
    // TODO: Handle errors
    // Delete habit from Backend
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

  logout() {
    // TODO: Add propper logout (also in the backend)
    this.router.navigate(['']);
  }
}
