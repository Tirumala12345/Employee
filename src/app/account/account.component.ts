import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { Address } from '../model/Address';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  accountNumber:string="Test";

  constructor(private accountService:AccountService){}

  account=new Account('','','',0,'',new Address('','','','',''));

  createAccount(custaddress:AddressComponent){
    console.log("CustAddress " +JSON.stringify(custaddress));
    this.account.address=custaddress.address;
    console.log(JSON.stringify(this.account));
    this.accountService.createAccount(this.account).subscribe(
      data =>{
        this.accountNumber=data.accountNumber;
      }
    );
  }
}
