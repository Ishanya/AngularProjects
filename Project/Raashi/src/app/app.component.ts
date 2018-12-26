import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raashi';
  age:number;
  fname:string;

  constructor()
  {
    this.age=76;
    this.fname="ghy";
    }
}
