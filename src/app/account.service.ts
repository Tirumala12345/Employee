import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8081/createAccount';

  createAccount(account:any):Observable<any>{
    console.log("From service" + JSON.stringify(account));
    const httpOptions ={
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Accept': 'application/json'
       })
     };
     return this.http.post(this.apiUrl,account,httpOptions);
  }
  }

