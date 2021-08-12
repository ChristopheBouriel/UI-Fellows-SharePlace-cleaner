import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { forbiddenCharactersValidator } from './input-validators'

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule]
})
export class SharedModule { }
