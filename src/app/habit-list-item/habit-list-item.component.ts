import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'habit-list-item',
  templateUrl: './habit-list-item.component.html',
  styleUrls: ['./habit-list-item.component.css'],
})
export class HabitListItemComponent {
  @Input() habitId!: number;
  @Input() habitText!: string; // ! not null assertion operator = this habitText prop is a not null prop -> a trick for the compiler ;)

  @Input() done!: boolean; // ! not null assertion operator = this done prop is a not null prop -> a trick for the compiler ;)

  @Input() archived!: boolean; // ! not null assertion operator = this archived prop is a not null prop -> a trick for the compiler ;)
  @Output() doneChange = new EventEmitter<boolean>();

  get cssClasses() {
    return {'strikeout': this.done,'text-muted': this.done || this.archived};
  }

  toggleDone() {
    this.done = !this.done;
    this.doneChange.emit(this.done);
  }
}
