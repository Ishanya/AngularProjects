import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { ShipBeanA } from '../ship-bean-a';
import { Register } from '../register';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  sip:ShipBeanA[];
  credId:String;
  finalId:String;
  submitted=false;
  model:ShipBeanA=new ShipBeanA("","",0,0,0,"","");
  constructor(private router:Router,private loginService:LoginServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.finalId=id;
    })

  }

goOut()
{
 
 this.loginService.requestLogout(this.finalId).subscribe(data=>{
   alert("You are Logout!!");
 });
this.router.navigate(["/"]);

}

initDetail()
{
  this.submitted=true;
  this.loginService.requestDetail(this.model).subscribe(data=>{
      this.sip=data;
  });
}



Registration(s:ShipBeanA): void {
  let selectedId=this.finalId?this.finalId:null;
  this.router.navigate(["/Register",selectedId,s.shipID]);
}


}
