import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { ShipBeanA } from '../ship-bean-a';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

finalId:String;
finalShip:String;
sip:ShipBeanA;
  model:Register=new Register("",0,0,"India","","","");
  constructor(private route:ActivatedRoute,private loginService:LoginServiceService,private router:Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      let ship=params.get('ship');
      this.finalId=id;
      this.finalShip=ship;
    })
  }

  goOut()
{
 if(this.loginService.requestLogout(this.finalId).subscribe(data=>{
   
 }))
 {
   alert("logged out");
 }
this.router.navigate(["/"]);

}

  initRegister()
  {

    this.loginService.requestShipById(this.finalShip).subscribe(data=>{
      this.sip=data;
     // alert(this.sip.source);
    });
  
    this.model.source=this.sip.source;
    this.model.destination=this.sip.destination;
    this.model.userId=this.finalId;
    this.model.shipId=this.finalShip;
    this.model.totalFare=(this.sip.price*this.model.noOfSeats);
    this.loginService.requestRegister(this.model).subscribe(data=>{
      alert("registered successful!");
    });

  }





}
