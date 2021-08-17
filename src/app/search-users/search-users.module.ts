import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../shared/shared.module';

import { SearchUsersRoutingModule } from './search-users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';

@NgModule({
  declarations: [
    UsersListComponent,
    SearchUsersComponent],
  imports: [
    CommonModule,
    SearchUsersRoutingModule,
    SharedModule
    //MatAutocompleteModule,
  ],
  providers: [
    SearchUsersService
  ],
  exports: [
    UsersListComponent,
    SearchUsersComponent
  ]
})
export class SearchUsersModule { }
