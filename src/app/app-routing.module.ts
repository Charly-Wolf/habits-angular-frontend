import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HabitComponent } from './habit/habit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HabitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
