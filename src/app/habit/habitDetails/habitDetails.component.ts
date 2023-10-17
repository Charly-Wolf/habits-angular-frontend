import { HabitService } from './../habit.service';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Habit from 'src/shared/models/habit';

@Component({
  selector: 'app-habitdetails',
  templateUrl: './habitdetails.component.html',
  styleUrls: ['./habitdetails.component.css'],
})
export class HabitDetailsComponent {
  habit: any = {};

  constructor(
    private habitService: HabitService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id'); // Gets the id parameter from the current Route / URL

      if (id) {
        // route parameter 'id' is of type string and must be converted to type Number
        this.habitService.getHabitById(parseInt(id, 10)).subscribe((habit) => {
          this.habit = habit;
        });
      }
    });
  }
}
