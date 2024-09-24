import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atm } from './model/Atm';
import { LoginRequest } from './model/LoginRequest';


@Injectable({
  providedIn: 'root'
})
export class AtmloginService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8081/atmLogin';
  
  login(atm: any): Observable<any> {
 
    const loginRequest :LoginRequest={
    cardNumber: atm.cardnumber,
    pin:atm.pin
  }
    console.log("From service" + JSON.stringify(loginRequest));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post(this.apiUrl, loginRequest, httpOptions);
  }
}
