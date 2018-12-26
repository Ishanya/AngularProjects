import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginServiceService } from '../login-service.service';
import { ShipBeanA } from '../ship-bean-a';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  opt:String;
  submitAdd=true;
  submitModify=true;
  submitModification=true;
  model:ShipBeanA=new ShipBeanA("","",0,0,0,"","");
  shippingID:String;
  shiping:ShipBeanA=new ShipBeanA("","",0,0,0,"","");
finalId:String;

  constructor(private router:Router,private loginServive:LoginServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.finalId=id;
    })

  }
goActivity()
{
  let selectedId=this.finalId?this.finalId:null;
  this.router.navigate(["/Admin",selectedId]);
}

goOut()
{
 
 this.loginServive.requestLogout(this.finalId).subscribe(data=>{
   alert("You are Logout!!");
 });
this.router.navigate(["/"]);

}

initOperation()
{
  if(this.opt=="ADD")
  {
    this.submitModify=true;
    this.submitModification=true;
    this.submitAdd=false;
  }
  else if(this.opt=="MODIFY"){
    this.submitModification=true;
    this.submitAdd=true;
    this.submitModify=false;
    
  }
  else{
    alert("wrong operation");
    let selectedId=this.finalId?this.finalId:null;
    this.router.navigate(["/Ship",selectedId]);
  }
}

initAdd()
{
this.loginServive.requestAddShip(this.model).subscribe(data=>{alert("Initiated Addition")});
}

initModify()
{
  this.model.shipID=this.shiping.shipID;
  this.loginServive.requestModifyShip(this.model).subscribe(data=>{alert("Initiated ModifY")});
}

initVerify()
{
  this.loginServive.requestVerification(this.shippingID).subscribe(data=>{
   this.shiping=data;
  });
 

  if(this.shiping.shipID.length==6){
    this.submitAdd=true;
    this.submitModify=true;
    this.submitModification=false;
  }
  else{
    alert("no such ship exists!");
    let selectedId=this.finalId?this.finalId:null;
    this.router.navigate(["/Ship",selectedId]);
   
  }


}

}
