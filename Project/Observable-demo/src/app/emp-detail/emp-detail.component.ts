import { Component, OnInit } from '@angular/core';
import { EmpSerService } from './../emp-ser.service';

@Component({
  selector: 'app-emp-detail',
  template: `
  <h2>Employee Detail</h2>
  <h3>{{errorMsg}}</h3>    
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}- {{employee.name}} - {{employee.age}}-{{employee.salary}}</li>
  </ul>
  `,
  styles: []
})
export class EmpDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;
  
  constructor(private _employeeService:EmpSerService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);

  }

}
