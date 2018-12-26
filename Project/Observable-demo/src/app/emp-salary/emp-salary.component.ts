import { Component, OnInit } from '@angular/core';
import { EmpSerService } from '../emp-ser.service';

@Component({
  selector: 'app-emp-salary',
  template: `
  <h2>Employee List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li >{{employee.name}}-{{2*employee.salary}}</li>
  </ul>
  `,
  styles: []
})
export class EmpSalaryComponent implements OnInit {
//*ngIf="{{employee.age}} &gt; '30'"
  public employees = [];
  public errorMsg;

  constructor(private _employeeService:EmpSerService) {}

  ngOnInit() {
      this._employeeService.getEmployees()
                    .subscribe(data => this.employees = data,
                      error => this.errorMsg = error);
  }

}
