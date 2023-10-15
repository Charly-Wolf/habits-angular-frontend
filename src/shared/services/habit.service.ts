import { Injectable } from '@angular/core';
import Habit from 'src/shared/models/habit';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private http: HttpClient) {}

  private habitsUrl: string = 'http://localhost:8080/api/habit';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  /** GET: all habits */
  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>(this.habitsUrl, this.httpOptions);
  }

  /** GET: one habit by Id */
  // getHabitById(id: number): Observable<Habit> {
  //   const habit =  this.http.get<Habit>(`${this.habitsUrl}/${id}`, this.httpOptions);
  //   alert(habit);
  //   return habit;
  // }

  /** POST: add a new habit to the server */
  addHabit(habit: Habit): Observable<Habit> {
    return this.http.post<Habit>(this.habitsUrl, habit, this.httpOptions);
  }

  /** DELETE */
  deleteHabit(habit: Habit): Observable<Habit> {
    return this.http.delete<Habit>(
      `${this.habitsUrl}/${habit.id}`,
      this.httpOptions
    );
  }

  /** PUT: Change habitText, isDone or isArchived. */
  updateHabit(habit: Habit): Observable<Habit> {
    return this.http.put<Habit>(
      `${this.habitsUrl}/${habit.id}`,
      habit,
      this.httpOptions
    );
  }
}
