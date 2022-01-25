import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../core/models/publication';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class PublicationsService {

  publicationsSubject = new Subject<Publication[]>();
  publicationSubject = new Subject<Publication>();
  fromProfileSubject = new BehaviorSubject<string>('');
  fromListSubject = new BehaviorSubject<boolean>(true);

  private publications: Publication[];
  private publication: Publication;

  lastSeenInList: string;
  fromPost: number;
  seeComments: boolean;
  seeLikers: boolean;
  numberComments: number;

  numberIndexes = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }

  emitPublicationsSubject( ) {
        this.publicationsSubject.next(this.publications.slice());
  }

  emitPublicationSubject( ) {
        this.publicationSubject.next(this.publication);
  }

  getAllPublications() {
        this.httpClient
          .get<Publication[]>('http://localhost:3000/api/publications')
          .subscribe(
            (response) => {
              this.publications = response;
              this.emitPublicationsSubject();
            },
            (error) => {
              console.log(error.error);
            }
          );
  }

  getPublicationById(id: number) {
      return new Promise((resolve, reject) => {
        this.httpClient
        .get<Publication>('http://localhost:3000/api/publications/' + id)
          .subscribe(
            (response: Publication) => {
              this.publication = response;
              this.emitPublicationSubject();
              resolve(response)
            },
            (error) => {
              reject(error.error);
            }
          );
      })
  }

  postPublication(title: string, username: string, publication: string, date: string) {
      return new Promise((resolve, reject) => {
        this.httpClient
        .post('http://localhost:3000/api/publications/add', { title: title, content: publication, userName: username, date_publication: date})
          .subscribe((response)=> {
              resolve(response);
              this.getAllPublications();
          },
          (error) => {
            reject(error.error);
          }
          )
      })
  }

  modifyPublication(content: string, title: string, modified: number, dbDate: string, postId: number, userName: string) {
      return new Promise((resolve, reject) => {
          this.httpClient
        .put('http://localhost:3000/api/publications/modify', {postId: postId, content: content, title: title, modified: modified, date_modif: dbDate, userName: userName})
        .subscribe(
          (response) => {
            resolve(response);            
              },
          (error) => {
            reject(error.error);
          }
        );
      })
  }

  deletePublication(publication:number, userName:string) {
    return new Promise((resolve, reject) => {
        this.httpClient
      .post('http://localhost:3000/api/publications/delete', { postId: publication, userName: userName })
      .subscribe(
        (response) => {
          resolve(response)
            },
        (error) => {
          reject(error.error);
        }
      );
    })
  }

  /*moderatePublication(publication:number, userName:string, moderate: boolean) {
    return new Promise((resolve, reject) => {
      this.httpClient
    .put('http://localhost:3000/api/moderate/publication', { postId: publication, userName: userName, moderated: moderate ? 1 : 0 })
    .subscribe(
      (response) => {
        resolve(response)
          },
      (error) => {
        reject(error.error);
      }
    );
    })
  }*/

  markAsRead(publication:number, userName:string, viewed: number) {
    return new Promise((resolve, reject) => {
    this.httpClient
    .put('http://localhost:3000/api/publications/read', { postId: publication, userName: userName, viewed: viewed })
    .subscribe(
      (response) => {
        resolve(response)
          },
      (error) => {
        reject(error.error);
      }
    );
  })
  }

  likePost(id: number, userName: string, like: boolean) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(
        'http://localhost:3000/api/publications/like',
        {
          postId: id,
          userName: userName,
          like: like ? 1 : 0
        })
        .subscribe(
          (response: { liked: boolean }) => {
            console.log(response.liked);
            resolve(response.liked);
          },
          (error) => {
            reject(error);
        }
      );
    });
  }
}
