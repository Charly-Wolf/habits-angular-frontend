import { Component, Input } from '@angular/core';
import events from './../../shared/services/EventService';
import Habit from 'src/shared/models/habit';

@Component({
  selector: 'habit-list-item',
  templateUrl: './habit-list-item.component.html',
  styleUrls: ['./habit-list-item.component.css'],
})
export class HabitListItemComponent {
  @Input() habit!: Habit; // ! not null assertion operator = this tricks the compiler to think this is not null

  get cssClasses() {
    return {
      strikeout: this.habit.isDone && !this.habit.isArchived,
      'text-muted': this.habit.isDone || this.habit.isArchived,
    };
  }

  archiveHabit() {
      if (confirm(`Archive ${this.habit.habitText}?`) === true) {
        events.emit('archiveHabit', this.habit);
        this.habit.isArchived = !this.habit.isArchived;
      }
  }

  // TODO: unarchiveHabit / restoreHabit (new button needed)

  removeHabit() {
    if (confirm(`Delete ${this.habit.habitText}?`) === true) {
      events.emit('deleteHabit', this.habit);
    }
  }

  toggleDone() {
    this.habit.isDone = !this.habit.isDone;
  }
}
