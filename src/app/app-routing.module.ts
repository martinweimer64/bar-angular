import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarDetailComponent } from './controllers/bar-detail/bar-detail.component';
import { BarListComponent } from './controllers/bar-list/bar-list.component';

const routes: Routes = [
  { path: '', component: BarListComponent },
  { path: 'bars', component: BarListComponent },
  { path: 'bars/:id', component: BarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }