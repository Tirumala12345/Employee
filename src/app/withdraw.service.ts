import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  constructor(private http:HttpClient) { }


  private apiUrl = 'http://localhost:8081/withdraw';



  withdraw(withdraw:any): Observable<any> {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
     //  params: new HttpParams().set('accountNumber', accountNumber).set('amount', amount)
    };
   
    return this.http.post(this.apiUrl, withdraw, httpOptions);
  }
} 