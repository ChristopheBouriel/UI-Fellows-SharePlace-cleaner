import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUsersComponent } from './search-users/search-users.component';

const routes: Routes = [
  {path: '', component: SearchUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchUsersRoutingModule { }
