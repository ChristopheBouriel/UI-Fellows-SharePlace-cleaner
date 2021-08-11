import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentsService} from '../comments.service';
import { AuthService } from '../../core/services/auth.service';

import { PublicationsService} from '../../publications/publications.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() postId: number;
  @Input() countLikes: number;
  @Input() likers: string[];

  comments: any[];
  commentsSubscription: Subscription;
  loading: boolean;
  seeLikers: boolean=false;
  seeComments: boolean=false;
  numberComments: number;

  constructor(private commentService: CommentsService,
              private authService: AuthService,
              private publicationService: PublicationsService) { }

  numberCommentsMapping:
      {[k: string]: string} = {'=0': 'Aucun commentaire', '=1': '1 commentaire', 'other': '# commentaires'};
        

  ngOnInit() {
    this.loading = true;
    this.commentsSubscription = this.commentService.commentsSubject.subscribe(
      (comments:any[]) => {
        this.comments = comments;
        this.publicationService.numberComments = comments.length;
      }
    );
    const userName = this.authService.getUserName();
    this.commentService.getAllComments(this.postId, userName);
    this.seeComments = this.publicationService.seeComments;
    this.seeLikers = this.publicationService.seeLikers;
    this.loading = false;
  }

  ngDoCheck() {
    this.numberComments = this.publicationService.numberComments;
  }

  onSeeProfile() {
    this.publicationService.fromListSubject.next(false);
    this.publicationService.seeLikers = true;
  }
  
  ngOnDestroy() {
    this.commentsSubscription.unsubscribe();
  }


}
