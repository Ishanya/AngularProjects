import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CredentialsBeanA } from './credentials-bean-a';
import { ProfileBeanA } from './profile-bean-a';
import { ShipBeanA } from './ship-bean-a';
import { Register } from './register';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class LoginServiceService {

//user:CredentialsBeanA=new CredentialsBeanA("","","",0);


  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8080';
  private adminUrl= 'http://localhost:8080/admin';
  private custUrl="http://localhost:8080/customer";

public requestLogin(user)
{
  //alert("in login"+ user.userId);
  return this.http.post<CredentialsBeanA>(this.userUrl+"/logIn",user);
}

public requestType(user)
{
  //alert(this.userUrl+"/type/"+user.userID);
  return this.http.get<CredentialsBeanA>(this.userUrl+"/type/"+user.userID);
}

public requestSignUp(usser)
{
  return this.http.post<ProfileBeanA>(this.userUrl+"/signUp",usser);
}

public requestAddShip(ship)
{
return this.http.post<ShipBeanA>(this.adminUrl+"/shipAdd",ship);
}

public requestModifyShip(ships)
{
return this.http.put<ShipBeanA>(this.adminUrl+"/shipModify",ships);
}

public requestVerification(shipp)
{
return this.http.get<ShipBeanA>(this.adminUrl+"/"+shipp);
}

public requestDetail(sip)
{
  return this.http.get<ShipBeanA[]>(this.custUrl+"/"+sip.source+"/"+sip.destination);
}

public requestLogout(cred)
{
  return this.http.put<boolean>(this.userUrl+"/logout/"+cred,cred);
}

public requestRegister(reg){
  return this.http.post<Register>(this.custUrl+"/registerAdd",reg);
}

public requestShipById(id)
{
  return this.http.get<ShipBeanA>(this.adminUrl+"/"+id);
}

}
