 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entr-obj',
  templateUrl: './entr-obj.component.html',
  styleUrls: ['./entr-obj.component.css']
})
export class Employee
{
  empId:number;
  empName:string;
  empSalary:number;

  constructor(eid,ename,esalary)
  {
    this.empId=eid;
    this.empName=ename;
    this.empSalary=esalary;
   // console.log("hello");
  }
  
  
}
export class EntrObjComponent implements OnInit {
  @Input() emps:Employee;
   
  constructor() { }

  salaryCheck(emp)
  {
    var txt1="",txt2="",txt3="",count1=0,count2=0,count3=0;
      if(emp.empSalary<10000)
      {
        txt1+=emp.empName+"-";
        count1++;
       
      }
      else if(emp.empSalary>10000 && emp.empSalary<20000)
      {
      txt2+=emp.empName+"-";
        count2++
      }
      else{
        return emp.empName;
        txt3+=emp.empName+"-";
        count3++;
      }
      txt1=count1+" "+txt1+" "+count2+" "+txt2+" "+count3+" "+txt3+" ";
      return txt1;
    }
    
  ngOnInit() {
  }

}
