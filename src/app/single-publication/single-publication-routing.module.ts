import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePublicationComponent } from './single-publication/single-publication.component';

const routes: Routes = [
  {path: 'publications/:id', component: SinglePublicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePublicationRoutingModule { }
