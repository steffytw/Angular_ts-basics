import {Component} from '@angular/core';
import { CourseService } from './courses.service';
@Component({
    selector :'courses',
    template :`<h1>{{getTitle()}}</h1>
    <ul>
        <li *ngFor="let course1 of courses1">
        {{course1}}
        </li>
    </ul>

<img src = "{{imgurl}}"/>
    
    `
})



export class CoursesComponent{
    courses1 ;
    imgurl = "http://lorempixel.com/400/200";
       getTitle(){
       return 'This is the list of courses'
   }
   constructor(service:CourseService){
    
       this.courses1 = service.getCourses()
   }
}