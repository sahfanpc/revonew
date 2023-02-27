import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page20Component } from './page20/page20.component';
import { Page18Component } from './page18/page18.component';
import { Page25Component } from './page25/page25.component';

@NgModule({
  declarations: [
    AppComponent,
    Page20Component,
    Page18Component,
    Page25Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
