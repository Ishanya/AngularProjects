import { Component } from '@angular/core';
import { Cheers } from './cheers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
drinks:Cheers[];

constructor()
{
  this.drinks=[new Cheers("Beer",5)];
}

  addLiquor(drink:HTMLInputElement):boolean
  {
    console.log(`this is preferred: ${drink}`);
    this.drinks.push(new Cheers(drink.value,0));
    drink.value="";
    return false;
  }

  sortLiquor(drink:HTMLInputElement)
  {
    console.log(`this is preferred: ${drink}`);
    this.drinks.sort(function(a, b){
      return a.vote-b.vote;
  })
    
  }
}

