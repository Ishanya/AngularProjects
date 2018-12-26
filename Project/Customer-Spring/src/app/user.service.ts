import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/customer';
  private delUrl = 'http://localhost:8080/delCustomer';
	//private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl+"s");
  }

  public deleteUser(user) {
   
    return this.http.delete(this.delUrl + "/"+ user.custId);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
}
