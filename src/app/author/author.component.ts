import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
authorlist;
  constructor(author:AuthorService) { 
    this.authorlist = author.getAuthors()
  }
  // imgurl = "http://lorempixel.com/400/200";
  colSpm=2
  isActive=true;
  whitenjnj='red';
  onSave(){
    console.log("Button Clicked");
  }
  onSave1( $event){
    $event.stopPropagation();
        console.log("button click");
  }
  onDivClick(){
    console.log("div is  clicked");
  }
  email = "hi everyone";
  onKeyUp(){
    
    console.log(this.email);                         
  }
  course={
    title :'Angular 7',
    rate : 4.9745,
    students :30195,
    price : 190.75,
    releaseddate : new Date(2016,3,1)
  }
  text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  ngOnInit() {
  }

}
