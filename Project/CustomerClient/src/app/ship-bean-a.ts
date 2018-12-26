export class ShipBeanA {
shipID:String;
shipName:String;
seatingCapacity:number;
reservationCapacity:number;
source:String;
destination:String;
price:number;

constructor(shipID:String,destination:String,price:number,reservationCapacity:number,seatingCapacity:number, shipName:String,source:String,){
    this.shipID=shipID;
    this.shipName=shipName;
    this.seatingCapacity=seatingCapacity;
    this.reservationCapacity=reservationCapacity;
    this.source=source;
    this.destination=destination;
    this.price=price;
}

}
