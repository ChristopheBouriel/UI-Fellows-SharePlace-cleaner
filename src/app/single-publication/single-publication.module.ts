import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';

import { SinglePublicationRoutingModule } from './single-publication-routing.module';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsListItemComponent } from './comments-list/comments-list-item/comments-list-item.component';
import { SinglePublicationComponent } from './single-publication/single-publication.component';
import { CommentsService } from './comments.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CommentsListComponent, CommentsListItemComponent, SinglePublicationComponent],
  imports: [
    CommonModule,
    SinglePublicationRoutingModule,
    SharedModule
  ],
  providers: [CommentsService],
  exports: [CommentsListComponent, CommentsListItemComponent, SinglePublicationComponent]
})
export class SinglePublicationModule { }
