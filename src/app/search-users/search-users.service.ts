import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { ShortProfile } from '../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  shortProfileSubject = new Subject<ShortProfile[]>();
  usersListSubject = new Subject();
  
  private shortProfile: ShortProfile[];

  constructor(private httpClient: HttpClient) { }

  emitShortProfileSubject( ) {
    this.shortProfileSubject.next(this.shortProfile);
  }

  getUsersList() {
    return new Promise((resolve, reject) => {
        this.httpClient
          .get('http://localhost:3000/api/auth/list')
          .subscribe(
            (response) => {
              this.usersListSubject.next(response);              
              this.emitShortProfileSubject();
              resolve(response);              
            },
            (error) => {
              reject(error);
            }
          );
    })
    }  
}
