import { Component, OnInit } from '@angular/core';
import { Employee } from '../entr-obj/entr-obj.component';

@Component({
  selector: 'app-prnt-obj',
  templateUrl: './prnt-obj.component.html',
  styleUrls: ['./prnt-obj.component.css']
})
export class PrntObjComponent implements OnInit {
  emp:Employee[];
  emp1=new Employee(1,"Ravi",10000);
  emp2=new Employee(2,"Vardaan",30000);
  emp3=new Employee(3,"Madhu",10000);
  emp4=new Employee(4,"Rachit",30000);

  constructor() { 
    this.emp=[this.emp1,this.emp2,this.emp3,this.emp4];
  }

  ngOnInit() {
  }

}
