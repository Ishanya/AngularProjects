export class Signup {
    email:string;
    password:string;
    gender:string;
    postalCode:string;
    city:string;
    state:string;


    constructor( email:string,Password:string,Gender:string,PostalCode:string,City:string,State:string){
        this.email=email;
        this.password=Password;
        this.gender=Gender;
        this.postalCode=PostalCode;
        this.city=City;
        this.state=State;
    }

   
}