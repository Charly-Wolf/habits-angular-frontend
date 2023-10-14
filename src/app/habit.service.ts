import { Injectable } from '@angular/core';
import Habit from 'src/shared/models/habit';
import { Observable, of, catchError, tap } from 'rxjs';
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
    return this.http.get<Habit[]>(this.habitsUrl);
  }

  /** POST: add a new habit to the server */
  addHabit(habit: Habit): Observable<Habit> {
    return this.http.post<Habit>(this.habitsUrl, habit, this.httpOptions);
  }
}
