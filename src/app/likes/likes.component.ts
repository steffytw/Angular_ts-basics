import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  constructor() { }
  @Input ('isActivated') isLike :boolean;
  @Output ('refractor') clickchanged = new EventEmitter()
  @Input('counter') counted :number;
  onCick (){

    this.isLike = !this.isLike;
    this.clickchanged.emit({newValue :this.isLike, mystring:'change'})
    if(this.isLike){
      
      this.counted=this.counted+1;
     
      
    }else{
      this.counted=this.counted-1;
    }
  }
  

  ngOnInit() {
  }

}
