export class CredentialsBeanA {

    userID: String ;
    password:String ;
    userType:String;
    loginStatus:number;


    constructor(userID:String, password:String,userType:String,loginStatus:number ){
        this.userID=userID;
        this.password=password;
        this.userType=userType;
        this.loginStatus=loginStatus;
    }
}
