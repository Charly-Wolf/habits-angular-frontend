import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import Habit from 'src/shared/models/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private http: HttpClient) {}

  private habitsUrl: string = 'http://localhost:8080/api/habit';

  private getHttpOptions() {
    return { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  }

  /** GET: all habits */
  getHabits(): Observable<Habit[]> {
    let options = this.getHttpOptions();
    return this.http
      .get<Habit[]>(this.habitsUrl, options)
      .pipe(catchError(this.handleError));
  }

  /** GET: one habit by Id */
  getHabitById(id: number): Observable<Habit> {
    let options = this.getHttpOptions();
    const habit =  this.http.get<Habit>(`${this.habitsUrl}/${id}`, options);
    return habit;
  }

  /** POST: add a new habit to the server */
  addHabit(habit: Habit) {
    let options = this.getHttpOptions();
    // options.headers = options.headers.set('Authorization', 'TODO');
    return this.http
      .post(this.habitsUrl, habit, options)
      .pipe(catchError(this.handleError));
  }

  /** DELETE */
  deleteHabit(habit: Habit) {
    let options = this.getHttpOptions();
    return this.http
      .delete(`${this.habitsUrl}/${habit.id}`, options)
      .pipe(catchError(this.handleError));
  }

  /** PUT: Change habitText, isDone or isArchived. */
  updateHabit(habit: Habit) {
    let options = this.getHttpOptions();
    return this.http
      .put(`${this.habitsUrl}/${habit.id}`, habit, options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error
      );
    } else {
      console.error('Server-side error: ', error.error);
    }
    // TODO: Use Messages from Backend
    return throwError(
      () => new Error('Cannot process request. Please try again')
    );
  }
}
