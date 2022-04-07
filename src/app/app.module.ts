import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule,Routes } from '@angular/router';
import { FoxComponent } from './fox/fox.component';


const appRoutes: Routes = [
    {path:'',component:AppComponent},
    {path:'cats',component:CatsComponent},
    {path:'dogs',component:DogsComponent},
    {path:'fox',component:FoxComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
