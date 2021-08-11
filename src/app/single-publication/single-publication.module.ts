import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePublicationRoutingModule } from './single-publication-routing.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsListItemComponent } from './comments-list/comments-list-item/comments-list-item.component';
import { SinglePublicationComponent } from './single-publication/single-publication.component';


@NgModule({
  declarations: [CommentsListComponent, CommentsListItemComponent, SinglePublicationComponent],
  imports: [
    CommonModule,
    SinglePublicationRoutingModule
  ],
  exports: [CommentsListComponent, CommentsListItemComponent, SinglePublicationComponent]
})
export class SinglePublicationModule { }
