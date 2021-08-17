import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

//import { forbiddenCharactersValidator } from './input-validators'

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatAutocompleteModule,]
})
export class SharedModule { }
