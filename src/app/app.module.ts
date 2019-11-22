import {FormsModule } from '@angular/forms';
import { AuthorService } from './author.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { EmailService } from './email.service';
import { AuthorComponent } from './author/author.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikesComponent } from './likes/likes.component';
import { MyformsComponent } from './myforms/myforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
 

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCasePipe,
    LikesComponent,
    MyformsComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService,
    EmailService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
