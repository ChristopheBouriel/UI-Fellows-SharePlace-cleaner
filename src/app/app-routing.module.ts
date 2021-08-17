import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { EntranceComponent } from './core/entrance/entrance.component';
import { LoginComponent } from './core/login/login.component';
//import { ProfileFormComponent } from './profile/profile-form/profile-form.component';

const routes: Routes = [
  {path: 'entrance', component: EntranceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', loadChildren: () =>
  import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'publications', loadChildren: () =>
  import('./publications/publications.module').then(m => m.PublicationsModule)},
  {path: 'publications/id', loadChildren: () =>
  import('./single-publication/single-publication.module').then(m => m.SinglePublicationModule)},
  {path: 'profile/:username', loadChildren: () =>
  import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'profile/modify', loadChildren: () =>
  import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'search-users', loadChildren: () =>
  import('./search-users/search-users.module').then(m => m.SearchUsersModule)},

  {path: '', pathMatch: 'full', redirectTo: 'entrance'},
  {path: '**', redirectTo: 'entrance' }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
