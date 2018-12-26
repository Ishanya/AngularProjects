import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

finalId:String;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.finalId=id;
    })
  }


  goShip(){
    let selectedId=this.finalId?this.finalId:null;
    this.router.navigate(["/Ship",selectedId]);
  }

  goRoute(){
    this.router.navigate(["/Route"]);
  }
  goSchedule(){
    this.router.navigate(["/Schedule"]);
  }

}
