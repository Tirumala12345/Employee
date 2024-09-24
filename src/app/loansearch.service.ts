import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private http:HttpClient) { }

  searchAccount(accountnumber:any,pan:any):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'accountinput':accountnumber,
        "paninput":pan,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8081/api/searchAccount/Datajpapanjpql",httpOptions)
  }

  searchAccountByBalance(balance:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'balanceinput':balance,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8081/api/searchAccount/balance",httpOptions)
  }

  searchAccountByBalanceGreater(balance:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'balanceinput':balance,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8081/api/searchAccount/balanceGreater",httpOptions)

  }

  searchAccountByBalanceRange(lowerRange:any,upperRange:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'lowerRangeinput':lowerRange,
        'upperRangeinput':upperRange,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8081/api/searchAccount/balanceRange",httpOptions)
  }

  searchAccountWithBalanceNull():Observable<any>{
    return this.http.get("http://localhost:8081/api/searchAccount/balanceNull")
  }

  searchAccountWithBalanceNotNull():Observable<any>{
    return this.http.get("http://localhost:8081/api/searchAccount/balanceNotNull")   
  }

  searchDistinctAccountByBalance(balance:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'balanceinput':balance,
        'Content-Type':'application/json',
        'Accept':'application/json'   
      })
    };
    return this.http.get("http://localhost:8081/api/searchAccount/distinctBalance",httpOptions)  
  }
}
