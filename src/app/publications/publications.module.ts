import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationsListItemsComponent } from './publication-list/publications-list-items/publications-list-items.component';


@NgModule({
  declarations: [PublicationListComponent, PublicationsListItemsComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicationsModule { }
