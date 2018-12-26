import { Component, OnInit } from '@angular/core';
import { ProfileBeanA } from '../profile-bean-a';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model:ProfileBeanA=new ProfileBeanA("","","","","","","","","","","","");
  submitted=false;
    constructor(private loginService:LoginServiceService,private router:Router) { }
  
    ngOnInit() {
    }
  
  
  onSubmit(){this.submitted=true;}
  
  initSignup():void{
    //alert(this.model.userId);
    this.loginService.requestSignUp(this.model).subscribe(data=>{alert("Initiated Login")});
    
    alert("signedUp successful");
    this.router.navigate(["/Login"]);
  }
  
  goLogin(){
    this.router.navigate(["/Login"]);
  }
  
 
  

}
