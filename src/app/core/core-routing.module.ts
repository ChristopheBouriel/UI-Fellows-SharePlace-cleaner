import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  /*{path: 'signup', loadChildren: () =>
    import('../profile/profile.module').then(m => m.ProfileModule)},
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }