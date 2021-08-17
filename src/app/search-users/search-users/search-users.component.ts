import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShortProfile } from '../../core/models/profile';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchUsersService} from '../../search-users/search-users.service';
import { ProfileService } from 'src/app/profile/profile.service';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  loading: boolean;
  noUser: string = '';
  usersNameList: string[] = new Array;
  shortProfiles: ShortProfile[];
  previousProfile: string;
  //aboutMe: string;
  research: boolean = false;
  gotUsersList: boolean = false;

  searchForm: FormGroup;
  searchControl = new FormControl();
  filteredUsernames: Observable<string[]>;

  constructor(private searchUsersService: SearchUsersService,
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit(): void {

    this.searchUsersService.usersListSubject.subscribe(
      (users: ShortProfile[]) => {
        this.shortProfiles = users;
        if (this.gotUsersList === false) {
          for (let i of users) {
          this.usersNameList.push(i.userName)
          }
        }
        this.gotUsersList = true;
      }
      );
    this.searchUsersService.getUsersList();
    this.previousProfile = this.profileService.lastProfileSeen;
    //this.fromUsersList = true;
  }

  private _filter(value: string): string[] {
    this.noUser = '';
    const filterValue = value.toLowerCase();
    return this.usersNameList.filter(username => username.toLowerCase().includes(filterValue));
  }  

  onSearch(inputUserName) {
    const check = this.usersNameList.includes(inputUserName);
    if(check) {
      //this.aboutMe = '';
      //this.searchUsersService.getProfileByUserName(inputUserName);
      this.searchControl.setValue('');
      this.router.navigate(['profile/' + inputUserName]);
    } else {
      this.noUser = 'Utilisateur inconnu';
    }
  }

  onButtonSearch() {
    if (this.research) {
      this.research = false;
      this.searchControl.setValue('');
    } else {
      this.research = true;
      this.searchForm = new FormGroup({
      })
      this.filteredUsernames = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }    
  }

}
