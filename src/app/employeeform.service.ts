import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeformService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8081/addEmployee';

  addEmployee(employee: Employee): Observable<Employee> {
    const httpOptions ={
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Accept': 'application/json'
       })
     };
     console.log("From service" + JSON.stringify(employee));
     return this.http.post<Employee>(this.apiUrl,employee,httpOptions);
  }

}