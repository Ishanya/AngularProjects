import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-emp-enter',
  templateUrl: './emp-enter.component.html',
  styleUrls: ['./emp-enter.component.css']
})
export class EmpEnterComponent implements OnInit {
@Input() emps:Employee;
  constructor() {
    this.txt1="";
    this.txt2="";
    this.txt3="";
    this.count1=0;
    this.count2=0;
    this.count3=0;
   }

  ngOnInit() {
  }

  txt1:string;
  txt2:string;
  txt3:string;
  count1:number;
  count2:number;count3:number;
  
  salaryCheck(emp)
  {
   
    if(emp.empSalary>=10000)
    {
     this.txt1+=emp.empName+"-";
      this.count1++;
    }
    else if(emp.empSalary>10000 && emp.empSalary<20000)
    {
      this.txt2+=emp.empName+"-";
      this.count2++;
    }
    else{
      this.txt3+=emp.empName+"-";
      this.count3++;
    }
    this.txt1="10000 "+this.count1+this.txt1 +"20000 "+this.count2+" "+this.txt2+"30000"+this.count3+" "+this.txt3;
    return this.txt1;
  }
}



