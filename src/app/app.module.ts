import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarListComponent } from './controllers/bar-list/bar-list.component';
import { BarDetailComponent } from './controllers/bar-detail/bar-detail.component';
import { BarFormComponent } from './controllers/bar-form/bar-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BarListComponent,
    BarDetailComponent,
    BarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
