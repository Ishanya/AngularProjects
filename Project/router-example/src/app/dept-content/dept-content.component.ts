import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-dept-content',
  template: `
   <!-- <ul>
    <li *ngIf="{{finalId}}==='1'">This is Angular
    </li>
    <li *ngIf="{{finalId}}==='2'">This is Java
    </li>
    <li *ngIf="{{finalId}}==='3'">This is JavaScript
    </li>
    <li *ngIf="{{finalId}}==='4'">This is HTML
    </li>
    </ul>-->
    <p>
    This is Angular!!
    </p>
    <button (click)="goToDepartment()">Back</button>
  `,
  styles: []
})
export class DeptContentComponent implements OnInit {
  finalId:number;
  constructor(private route:ActivatedRoute,private route1:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.finalId=id;
  })

}

goToDepartment()
{
  let selectedId=this.finalId ? this.finalId : null;
  this.route1.navigate(["/dept-detail",selectedId]);
}

}
