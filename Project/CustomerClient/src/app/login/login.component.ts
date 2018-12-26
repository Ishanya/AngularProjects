import { Component, OnInit } from '@angular/core';
import { CredentialsBeanA } from '../credentials-bean-a';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

model:CredentialsBeanA=new CredentialsBeanA("","","C",0);
submitted=false;
type:CredentialsBeanA=new CredentialsBeanA("","","",0);
  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit() {
  }


onSubmit(){this.submitted=true;}

initLogin():void{
  //alert(this.model.userId);
  this.loginService.requestLogin(this.model).subscribe(data=>{alert("Initiated Login")});
  this.loginService.requestType(this.model).subscribe(data=>{this.type=data});
  if(this.type.userType=="A")
  {
    let selectedId=this.model.userID?this.model.userID:null;
    this.router.navigate(["/Admin",selectedId]);
  }
  else{
    let selectedId=this.model.userID?this.model.userID:null;
    this.router.navigate(["/Customer",selectedId]);
  }
  this.submitted=true;
}

goSignup()
{
  this.router.navigate(["/Signup"]);
}

}