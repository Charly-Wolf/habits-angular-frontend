import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HabitListComponent } from './habit-list/habit-list.component';
import { AddHabitFormComponent } from './add-habit-form/add-habit-form.component';
import { HabitFilterComponent } from './habit-filter/habit-filter.component';
import { HabitListItemComponent } from './habit-list-item/habit-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    AddHabitFormComponent,
    HabitFilterComponent,
    HabitListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
