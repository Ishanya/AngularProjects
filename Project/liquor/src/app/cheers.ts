export class Cheers {
    vote:number;
    drinkk:string;
    constructor(drink,vote)
    {
        this.vote=vote;
        this.drinkk=drink;
    }

    voteUp()
    {
        this.vote+=1;
    }

    voteDown()
    {
        this.vote-=1;
    }
}
