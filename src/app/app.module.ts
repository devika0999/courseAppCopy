import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AddCourseComponent
  },
  {
    path:"view",component:ViewcourseComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCourseComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
