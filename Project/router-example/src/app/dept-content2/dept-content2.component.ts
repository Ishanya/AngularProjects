import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-dept-content2',
  template: `
    <p>
      This is Java! Welcome
    </p>
    <button (click)="goToDepartment()">Back</button>
  `,
  styles: []
})
export class DeptContent2Component implements OnInit {
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
