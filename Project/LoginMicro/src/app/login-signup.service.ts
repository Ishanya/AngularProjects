import { Injectable } from '@angular/core';
import { Signup } from './signup';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8080';


public requestLogin(email)
{
  //alert("in login"+ user.userId);
  return this.http.get<Signup>(this.userUrl+"/login"+"/"+email);
}


public requestSignUp(usser)
{
  return this.http.post<Signup>(this.userUrl+"/signup",usser);
}


}
