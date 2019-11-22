import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title:string;
  post={
  title:'Title',
  isFavourite : false
  }
  
    count=10;
  courses = []
  viewMode='Map'
  
  
onFavouriteChange(x){
    console.log(x);
    // console.log(x.mystring)
    
  }
}
