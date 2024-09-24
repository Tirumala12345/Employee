import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { Atm } from '../model/Atm';
import { AtmService } from '../atm.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createatm',
  templateUrl: './createatm.component.html',
  styleUrl: './createatm.component.css'
})
export class CreateatmComponent {

  account:Account={
    name: '',
    mobilenumber: '',
    pan: '',
    balance: 0,
    accountNumber: '',
    address: undefined
  }

  atm:Atm={
    cardnumber: '',
    pin: '',
    cvv: '',
    expiry: new Date(),
    accountnumber: ''
  }

  constructor(private atmService:AtmService){}
  createAtm(){
    this.atmService.createAtm(this.account).subscribe(
      response =>{
        this.atm=response;
        console.log('ATM Created ',response );
      },
      error =>{
        console.error('Failed to create atm',error );
      }
    )
  }
  
}
