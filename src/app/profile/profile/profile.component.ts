import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile} from '../../core/models/profile';
import { Publication } from '../../core/models/publication';
import { ProfileService} from '../profile.service';
import { PublicationsService} from '../../publications/publications.service';
import { AuthService} from '../../core/services/auth.service';

import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile: string;
  loading: boolean;
  profile: Profile;
  publications: Publication[];
  
  usersNameList: string[] = new Array;
  aboutMe: string;
  fromPost: number;
  fromUsersList: boolean = false;
  //noUser: string = '';  
  fromList: boolean = false ;
  userName: string;
  isMine: boolean = false;
  //searching: boolean;
  //research: boolean = false;
  //gotUsersList: boolean;
  //ifBack: boolean;

  constructor(private route: ActivatedRoute,              
              private profileService: ProfileService,
              private publicationService: PublicationsService,
              private authService: AuthService,
              private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.loading = true;    
    this.authService.userName$.subscribe(
      (userName) => {
        this.userName = userName;
      });
      
    this.userProfile = this.route.snapshot.params['username'];
    
    this.profileService.lastProfileSeen = this.userProfile;

    this.publicationService.fromProfileSubject.next(this.userProfile);
    this.publicationService.fromListSubject.subscribe(
      (fromList) => {
        this.fromList = fromList;
      }
    )

    if (this.userProfile === this.userName) {this.isMine = true;}
     
    this.profileService.profileSubject.subscribe(
      (profile: Profile) => {
        this.profile = profile[0];
        if (this.profile?.aboutMe !== '') {
          this.aboutMe = this.profile?.aboutMe.replace(/&µ/gi,'\"');
        }
      }
    );

    this.profileService.userPublicationsSubject.subscribe(
      (publications:any[]) => {
        this.publications = publications;  
      }
    );
    
    this.profileService.getProfileByUserName(this.userProfile);

    this.fromPost = this.publicationService.fromPost;
    this.loading = false;
  }

  ngDoCheck() {
    this.userProfile = this.route.snapshot.params['username'];
    if (this.userProfile === this.userName && this.profileService.seeMine === true) {      
      this.isMine = true;
      this.profileService.seeMine = false;
      this.profileService.getProfileByUserName(this.userName).then(
        () => this.checkAboutMe()
      );      
      //this.ifBack = true;    
    } else if (this.userProfile !== this.userName) {
        this.isMine = false;
        this.checkAboutMe();
      };

    /*if (this.userProfile !== this.userName && this.ifBack === true) {
      this.profileService.getProfileByUserName(this.userProfile).then(
        () => this.checkAboutMe()
      );
      this.ifBack = false;
    };*/

    
  
    this.publicationService.fromListSubject.subscribe(
      (fromList:boolean) => {
        this.fromList = fromList;
      });
  }

  checkAboutMe() {
    if (this.profile?.aboutMe !== '') {
      this.aboutMe = this.profile?.aboutMe.replace(/&µ/gi,'\"');
    } else { this.aboutMe = '';};
  }

}
