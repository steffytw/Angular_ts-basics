import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }
  @Input ('isActive') isFavoite :boolean;
  @Output ('change') clickchange = new EventEmitter()
  onCick(){

    this.isFavoite = !this.isFavoite;
    this.clickchange.emit({newValue :this.isFavoite, mystring:'change'})
  }

  ngOnInit() {
  }

}
