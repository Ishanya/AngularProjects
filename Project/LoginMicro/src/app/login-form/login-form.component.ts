import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Signup } from '../signup';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model:Signup=new Signup("","","","","","");
  result=true;
    constructor(private fb:FormBuilder,private login:LoginSignupService,private route:Router) { }
    
  loginForm=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(4)]], 
      password:['',Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')],      
    
    });
    
    newModel:Signup=new Signup("","","","","","");
  
    ngOnInit() {
     
    }
  
  loginUser(values){
    this.model.email=values.email;
  this.model.password=values.password;
  
  this.login.requestLogin(values.email).subscribe(data=>{
  this.newModel = data;

  if(this.newModel==values.email && this.newModel==values.password)
  {
    alert("logged in");
  }
     
  
  });
  
  }
  
  
 signupcomp()
  {
    this.route.navigate(["/Signup"]);
  }

}
