import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './core/entrance/entrance.component';

const routes: Routes = [
  {path: 'entrance', component: EntranceComponent},
  {path: '', pathMatch: 'full', redirectTo: 'entrance'},
  {path: '**', redirectTo: 'entrance' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
