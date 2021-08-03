import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntranceComponent } from './entrance/entrance.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [EntranceComponent, HeaderComponent, NavBarComponent],
  imports: [
    CommonModule
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
