import { Component, Input } from '@angular/core';
import Habit from 'src/shared/models/habit';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent {
  @Input() habits: Habit[] = [];
}
