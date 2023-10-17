import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HabitModule } from './habit/habit.module';
import { LoginModule } from './login/login.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [AppRoutingModule, BrowserModule, HabitModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
