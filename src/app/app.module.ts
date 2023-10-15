import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitModule } from './habit/habit.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HabitModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
