import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './core/entrance/entrance.component';
import { LoginComponent } from './core/login/login.component';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';

const routes: Routes = [
  {path: 'entrance', component: EntranceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: ProfileFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'entrance'},
  {path: '**', redirectTo: 'entrance' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
