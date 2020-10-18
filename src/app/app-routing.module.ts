import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarDetailComponent } from './controllers/bar-detail/bar-detail.component';
import { BarListComponent } from './controllers/bar-list/bar-list.component';
import { BarFormComponent } from './controllers/bar-form/bar-form.component';

const routes: Routes = [
  { path: '', component: BarListComponent },
  { path: 'bars', component: BarListComponent },
  { path: 'bar/:id', component: BarDetailComponent },
  { path: 'bars/new', component: BarFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }