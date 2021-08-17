import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { ShortProfile } from '../core/models/profile';

@Injectable()
export class SearchUsersService {

  //shortProfilesSubject = new Subject();
  usersListSubject = new Subject<ShortProfile[]>();

  private shortProfiles: ShortProfile[];

  constructor(private httpClient: HttpClient) { }

  /*emitShortProfileSubject( ) {
    this.shortProfilesSubject.next(this.shortProfiles);
  }*/

  getUsersList() {
    return new Promise((resolve, reject) => {
        this.httpClient
          .get('http://localhost:3000/api/auth/list')
          .subscribe(
            (response: ShortProfile[]) => {
              this.usersListSubject.next(response);              
              //this.emitShortProfileSubject();
              resolve(response);              
            },
            (error) => {
              reject(error);
            }
          );
    })
    }  
}
