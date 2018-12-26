import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-value',
  templateUrl: './user-value.component.html',
  styleUrls: ['./user-value.component.css']
})
export class UserValueComponent implements OnInit {
@Input() val:string;




  constructor() { }

  abr(val1)
  {
    var txt="";
    var arr=[];
    arr=val1.split(" ");
    for(var i=0;i<arr.length;i++)
    {
     if(i==(arr.length-1))
     {
       txt+=arr[i];
     }
     else{
       txt+=arr[i].charAt(0)+" ";
     }

    }
    return txt;

  }
  ngOnInit() {
  }

}
