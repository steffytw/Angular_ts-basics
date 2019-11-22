import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  genders = ["male", "female"];
  constructor() { }

  ngOnInit() {
  }

}
