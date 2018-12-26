export class Register {

registerID:String;
totalFare:number;
noOfSeats:number;
source:String;
destination:String;
shipId:String;
userId:String;

constructor(registerID:String,totalFare:number,noOfSeats:number,source:String,destination:String,shipId:String,userId:String){
this.registerID=registerID;
this.totalFare=totalFare;
this.noOfSeats=noOfSeats;
this.source=source;
this.destination=destination;
this.shipId=shipId;
this.userId=userId;
}
}
