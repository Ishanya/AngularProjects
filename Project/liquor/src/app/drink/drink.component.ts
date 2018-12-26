import { Component, OnInit, Input } from '@angular/core';
import { Cheers } from '../cheers';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
@Input() cat:Cheers;
  constructor() { }

UpVote():boolean
{
this.cat.voteUp();
return false;
}

DownVote():boolean
{
this.cat.voteDown();
return false;
}

  ngOnInit() {
  }

}
