import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Signup } from '../signup';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

model:Signup=new Signup("","","","","","");

  constructor(private fb:FormBuilder,private login:LoginSignupService,private route:Router) { }
  
  registrationForm=this.fb.group({
    email:['',[Validators.required,Validators.email]], 
    password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],      
    cnfpassword:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
    gender:['Male',Validators.required],
    address:this.fb.group({
      postalName:['',[Validators.required,Validators.pattern('[0-9]{6}')]], 
      city:['',[Validators.required,Validators.pattern('[A-Za-z]{2,}')]],
      state:['Rajasthan',Validators.required]
    })
  });
  
submitted=true;
  

  ngOnInit() {
   if(this.registrationForm.value.password==this.registrationForm.value.cnfpassword){
     this.submitted=false;
   }
  }

signUpUser(values){

alert(values.address.city+" in  "+values.address.postalName+" or "+values.email);

this.model.email=values.email;
this.model.password=values.password;
this.model.gender=values.gender;
this.model.postalCode=values.address.postalName;
this.model.city=values.address.city;
this.model.state=values.address.state;

this.login.requestSignUp(this.model).subscribe(data=>{

      alert("Registered Successfully");

});

}


logincomp()
{
  this.route.navigate(["/Login"]);
}

}
