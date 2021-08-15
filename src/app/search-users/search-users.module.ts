import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchUsersRoutingModule } from './search-users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';

@NgModule({
  declarations: [UsersListComponent, SearchUsersComponent],
  imports: [
    CommonModule,
    SearchUsersRoutingModule
  ],
  providers: [
    SearchUsersService
  ]
})
export class SearchUsersModule { }
