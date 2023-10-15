import { Component, Input } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
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

  constructor(private events: EventService) {}

  removeHabit() {
    if (confirm(`Delete ${this.habit.habitText}?`) === true) {
      this.events.emit('deleteHabit', this.habit);
    }
  }

  toggleArchiveHabit() {
    if (
      confirm(
        `${this.habit.isArchived ? 'Restore' : 'Archive'} ${
          this.habit.habitText
        }?`
      ) === true
    ) {
      this.habit.isArchived = !this.habit.isArchived;
      this.events.emit('toggleArchiveHabit', this.habit);
    }
  }

  toggleDone() {
    // TODO: Sort done habits after the not done
    this.habit.isDone = !this.habit.isDone;
    this.events.emit('toggleDone', this.habit);
  }
}
