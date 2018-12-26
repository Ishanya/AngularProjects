import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

submitted=true;
submissive=true;
  ngOnInit() {
  }

signe(){
  console.log("r4fygy");
this.submitted=false;
}

logging(){
  this.submissive=false;
}


}
