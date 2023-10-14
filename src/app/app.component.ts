import { Component } from '@angular/core';
import { HabitItem } from 'src/shared/models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: HabitItem[] = [
    new HabitItem('Learn Angular'),
    new HabitItem('Brush teeth', true),
    new HabitItem('Workout'),
    new HabitItem('Old habit', false, true),
  ];

  filter: any; // Bound to the filter prop on <habit-filter> component
}
