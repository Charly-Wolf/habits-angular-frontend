import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import Habit from 'src/shared/models/habit';

const filters = [
  (habit: Habit) => !habit.isArchived,
  (habit: Habit) => habit.isDone && !habit.isArchived,
  (habit: Habit) => !habit.isDone && !habit.isArchived,
  (habit: Habit) => habit.isArchived,
];

@Component({
  selector: 'habit-filter',
  templateUrl: './habit-filter.component.html',
  styleUrls: ['./habit-filter.component.css'],
})
export class HabitFilterComponent implements OnInit {
  // 2 way Binding using @Input() and @Output()
  @Input() filter: any; // Bound to the filter prop on parent <app> component
  @Output() filterChange = new EventEmitter<any>(); // Passes the value of the filter prop to the parent <app> component

  ngOnInit(): void {
    // Execute this when the component gets created
    this.updateFilter(0); // Pass initial value to Parent component
  }

  listFilter: number = 0;

  updateFilter(value: any) {
    // Param "value" has the value of the selected <option> of the >select> element, which is the value of "$event" on the html template
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
