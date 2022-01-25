import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'signup', component: ProfileFormComponent},
  {path: ':username', component: ProfileComponent },
  {path: ':username/modify', component: ProfileFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
