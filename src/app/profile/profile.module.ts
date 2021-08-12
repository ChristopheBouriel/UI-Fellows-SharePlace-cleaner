import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileService } from './profile.service';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [ProfileFormComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  providers: [
    ProfileService
  ],
  exports: [ProfileFormComponent]
})
export class ProfileModule { }
