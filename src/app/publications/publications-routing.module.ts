import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationsListComponent } from './publications-list/publications-list.component';

const routes: Routes = [
  {path: '', component: PublicationsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
