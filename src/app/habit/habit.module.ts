import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HabitListComponent } from './habit-list/habit-list.component';
import { AddHabitFormComponent } from './add-habit-form/add-habit-form.component';
import { HabitFilterComponent } from './habit-filter/habit-filter.component';
import { HabitListItemComponent } from './habit-list-item/habit-list-item.component';

@NgModule({
  declarations: [
    HabitListComponent,
    AddHabitFormComponent,
    HabitFilterComponent,
    HabitListItemComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    HabitListComponent,
    AddHabitFormComponent,
    HabitFilterComponent,
    HabitListItemComponent,
  ],
})
export class HabitModule {}
