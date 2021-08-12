import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublicationsService} from '../publications.service';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';
import { forbiddenCharactersValidator } from '../../shared/input-validators';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {

  publications: any[];
  publicationsSubscription: Subscription;
  publicationForm: FormGroup;
  loading: boolean;
  posting: boolean;
  errorMsg: string;
  
  constructor(private publicationService: PublicationsService,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.publicationsSubscription = this.publicationService.publicationsSubject.subscribe(
      (publications:any[]) => {
        this.publications = publications;
        this.publicationService.numberIndexes.subscribe(
          () => {
            if (this.publications.length  === this.publicationService.numberIndexes.value + 1) {
              //console.log('Scrolling');
              this.viewportScroller.setOffset([0,100]);
              this.viewportScroller.scrollToAnchor(this.publicationService.lastSeenInList);
            }                
          });
      }
    );
    this.publicationService.getAllPublications();
    this.publicationForm = this.formBuilder.group({
      title: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.pattern('^[A-Z\u00C0-\u00D6\u00D8-\u00DF]{1}[0-9a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F \x22!?:(),\.\'-]*$')]),
      publication: new FormControl(null, [Validators.required, Validators.maxLength(4000), forbiddenCharactersValidator(/[<>*]/)]),        
      });

    console.log('Publications loaded')
      
  }

  onWantPost() {
    this.posting = true;
  }

  onPost() {
    this.loading = true;
    const publication = this.publicationForm.get('publication').value;
    const title = this.publicationForm.get('title').value;
    const username = this.authService.getUserName();
    const date = new Date().toISOString();
    const dbDate = date.split('.')[0].replace('T',' ');
    this.publicationService.postPublication(title, username, publication, dbDate).then(
      (response) => {
        this.loading = false;
        this.publicationForm.reset();
        this.posting = false;
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMsg = error.message;
      }
    );
  }

  onCancel() {
    this.posting = false;
    this.publicationForm.reset();
  }
  
  ngOnDestroy() {
    this.publicationsSubscription.unsubscribe();
  }

}
