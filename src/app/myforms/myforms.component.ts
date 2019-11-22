import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent implements OnInit {
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  @ViewChild('f', { static: false }) signupForm: NgForm
  userData = {

  };
  
  onSubmit() {
    console.clear()
    
    console.log(this.signupForm);
 
    this.isSubmitted = true;
    this.userData = this.signupForm;
    this.signupForm.reset()
  
    
  }



  defaultQuestion = "pet";
  answer = " ";
  genders = ["male", "female"];

  suggestUsername() {
    const suggestedName = "Super user";
    this.signupForm.form.patchValue({
      username: suggestedName
    })

  }
  isSubmitted = false;
  ngOnInit() {
  }




}
