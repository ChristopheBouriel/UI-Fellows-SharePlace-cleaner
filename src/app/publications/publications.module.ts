import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { PublicationsListItemsComponent } from './publications-list/publications-list-items/publications-list-items.component';
import { PublicationsService } from './publications.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PublicationsListComponent,
    PublicationsListItemsComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    SharedModule,
    //ReactiveFormsModule
  ],
  providers: [PublicationsService],
  exports: [
    PublicationsListComponent,
    PublicationsListItemsComponent
  ]
})
export class PublicationsModule { }
