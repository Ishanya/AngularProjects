import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-print',
  templateUrl: './emp-print.component.html',
  styleUrls: ['./emp-print.component.css']
})
export class EmpPrintComponent implements OnInit {

  emp:Employee[];
  constructor() { 
   
   var emp1=new Employee("Ravi",1,10000);
    var emp2=new Employee("varun",2,30000);
    var emp3=new Employee("rachit",3,10000);
    var emp4=new Employee(" Madhu",4,20000);
    var emp5=new Employee("Anshu",5,30000);
    var emp6=new Employee("Rj",6,10000);
    var emp7=new Employee("Aman",7,30000);
    var emp8=new Employee("Mohit",8,20000);
    this.emp=[emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8];
  }

  ngOnInit() {
  }

}
