import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iemployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpSerService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this._url)
                    .pipe(tap(data =>  alert(JSON.stringify(data))), catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
