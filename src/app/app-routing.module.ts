import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HabitComponent } from './habit/habit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HabitDetailsComponent } from './habit/habitDetails/habitDetails.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: HabitComponent },
  { path: 'habit/:id', component: HabitDetailsComponent },
  { path: '**', component: NotFoundComponent }, // ** is a wildcard for any path which is not one of the above, IT MUST BE AT THE END OF THE ARRAY!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
