import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-dept-details',
  template: `
    <h3>You selected: {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>&nbsp;
    <a (click)="goNext()">Next</a><br>
    <button (click)="goToDepartment()">Back</button>
    <br>
    <button (click)="getContent()">Content</button>
  `,
  styles: []
})
export class DeptDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute,private route1:Router) { }

  ngOnInit() {
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    })
  }

  goPrevious()
  {
   let previousId= this.departmentId-1;
   this.route1.navigate(["/dept-detail",previousId]);
   //this.departmentId=previousId;
  }

  goNext()
  {
   let nextId= this.departmentId+1;
   this.route1.navigate(["/dept-detail",nextId]);
  // this.departmentId=nextId;
  }

goToDepartment()
{
  let selectedId=this.departmentId ? this.departmentId : null;
  this.route1.navigate(["/dept",{id: selectedId}]);
}

getContent()
{
  this.route1.navigate(["/dept-content"+this.departmentId,this.departmentId]);
}

}
