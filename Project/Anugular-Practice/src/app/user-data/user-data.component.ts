import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  names:string[];
  constructor() { 
    this.names = ["Ishanya Mittal","Govind Singh Rawat","Raashi"];
  }

  ngOnInit() {
  }

}
