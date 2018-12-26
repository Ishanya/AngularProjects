export class Signup {
    Name:String;
    Password:String;
    Gender:String;
    PostalCode:String;
    City:String;
    State:String;


    constructor( Name:String,Password:String,Gender:String,PostalCode:String,City:String,State:String){
        this.Name=Name;
        this.Password=Password;
        this.PostalCode=PostalCode;
        this.City=City;
        this.State=State;
    }
}