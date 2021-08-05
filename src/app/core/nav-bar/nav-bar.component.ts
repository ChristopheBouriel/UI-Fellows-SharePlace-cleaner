import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
//import { ProfileService} from '../services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isAuth: boolean;
  isAdmin: boolean;
  authSubscription: Subscription;
  adminSubscription: Subscription;
  userNameSubscription: Subscription;
  userName: string;
  errorMsg: string;
  
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
      }
    );

    this.adminSubscription = this.authService.isAdmin$.subscribe(
      (admin) => {
        this.isAdmin = admin;
      }
    );

    this.userNameSubscription = this.authService.userName$.subscribe(
      (userName: string) => {
        this.userName = userName;
      }
    );
  }

  onLogout() {
    const date = new Date().toISOString();
    const dbDate = date.split('.')[0].replace('T',' ');
    this.authService.logout(this.userName, dbDate).then(
      () => { 
        this.authService.headMessage$.next('Vous êtes déconnecté');
      }
    ).catch(
      (error) => {       
        this.errorMsg = error.message;
      }
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.userNameSubscription.unsubscribe();
    this.adminSubscription.unsubscribe();
  }
}
