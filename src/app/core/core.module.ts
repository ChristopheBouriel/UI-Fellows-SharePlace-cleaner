import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { EntranceComponent } from './entrance/entrance.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';

//import { ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EntranceComponent, 
    HeaderComponent, 
    NavBarComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    //RouterModule
    //ReactiveFormsModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
    EntranceComponent, 
    HeaderComponent, 
    NavBarComponent,
    LoginComponent
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error(
        'Import CoreModule in the root module only !'
      );
    }
  }
}
