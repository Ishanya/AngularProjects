import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-dept',
  template: `
    <h3>
    Department List
    </h3>
    <ul class="items">
    <li (click)="onSelect(dep)" [class.selected]="onSelected(dep)" *ngFor="let dep of departments">
    <span class="badge">{{dep.id}}</span> {{dep.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class DeptComponent implements OnInit {
  public selectedId;
departments=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"Java"},
  {"id":3,"name":"JavaScript"},
  {"id":4,"name":"Html"},
]
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    })
  }

onSelect(dep)
{
  this.router.navigate(["/dept-detail",dep.id]);
}

onSelected(dep)
{
  return dep.id===this.selectedId;
}

}
