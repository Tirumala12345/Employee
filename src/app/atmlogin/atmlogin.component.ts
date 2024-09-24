import { Component } from '@angular/core';
import { Atm } from '../model/Atm';
import { AtmloginService } from '../atmlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atmlogin',
  templateUrl: './atmlogin.component.html',
  styleUrl: './atmlogin.component.css'
})
export class AtmloginComponent {

 atm:Atm={
   cardnumber: '',
   pin: '',
   cvv: '',
   expiry: new Date(),
   accountnumber: ''
 }
 message: string = '';

 constructor(private atmLoginService:AtmloginService,private router:Router){}
  login(){
    this.atmLoginService.login(this.atm).subscribe(
      response =>{
        if(response==="Login Successful"){ 
         console.log("Login Successful");
          this.router.navigate(['/transaction']);
        }else{
          this.message="Incorrect Credentials";
        }
      },
      error =>{
        this.message="Login Failed";
        console.log("Login Failed",error);
      }
    )

  }
}
