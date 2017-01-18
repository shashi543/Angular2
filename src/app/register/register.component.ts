import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}  from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 


  constructor(gsk:FormBuilder) { 
this.registerForm=gsk.group({

	
	'firstName':["Shashi",Validators.required],

	'lastName':["Gaddam",Validators.required],

	'email':['', Validators.required],

	'password':[null,Validators.required],

	'country':[null,Validators.required],

	'gender':[null,Validators.required],

	'agree':[null,Validators.required],

})
  




  }

  ngOnInit() {
  }
Countries=[{"code":"IN","name":"India"},{"code":"USA","name":"UnitedStates"},{"code":"UK","name":"UnitedKingdom"}];
register={};
registerForm:FormGroup
registerUser(){
	console.log(this.register);
}
submitForm(form:any){
	console.log(form);
}




}

