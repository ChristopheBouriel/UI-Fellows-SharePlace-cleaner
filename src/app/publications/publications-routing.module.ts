import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationListComponent } from './publication-list/publication-list.component';

const routes: Routes = [
  {path: 'publications', component: PublicationListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
