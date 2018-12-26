import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css']
})
export class SignupButtonComponent implements OnInit {

model:Signup=new Signup("","","","","","");

  constructor() { }

  ngOnInit() {
  }




}
