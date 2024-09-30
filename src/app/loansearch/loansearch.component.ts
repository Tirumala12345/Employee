import { Component } from '@angular/core';
import { LoansearchService } from '../loansearch.service';
import { GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
  accountNumber:string='';
  pan:string='';
  balance:number=0;
  balanceAmount:number=0;
  accounts: any[] = [];
  lowerRange!: number;
  upperRange!: number;
  statusCode:number=0;

  constructor(private loansearch:LoansearchService){}
  searchaccount(){
    console.log("Inpu Account Number" +this.accountNumber);
    this.loansearch.searchAccount(this.accountNumber).subscribe(
      data =>  {
    console.log(" search Account" +JSON.stringify(data));
      }
    )
  }

  searchaccountbystatusCode(){
    this.loansearch.searchaccountbystatusCode(this.accountNumber).subscribe(
      data =>{
        console.log(" search Account By Status" +JSON.stringify(data));
      }
    )
  }

  searchaccountPan(){
      console.log("Inpu Account Number" +this.accountNumber);
      this.loansearch.searchAccountPan(this.accountNumber,this.pan).subscribe(
        data =>  {
      console.log(" search Account" +JSON.stringify(data));
        }
      )
    }

    searchAccountByBalance(){
      console.log("Inpu Balance Amount" +this.balance);
      this.loansearch.searchAccountByBalance(this.balance).subscribe(
       response =>{
        this.accounts=response;
        console.log(JSON.stringify(this.accounts))
       }
      )

    }

    searchAccountByBalanceGreater(){
      console.log("Inpu Balance Amount" +this.balanceAmount);
      this.loansearch.searchAccountByBalance(this.balanceAmount).subscribe(
       response =>{
        this.accounts=response;
        console.log(JSON.stringify(this.accounts))
       }
      )

    }

    searchAccountByBalanceRange(){
      console.log("Inpu Lower Range" +this.lowerRange + 'Input Upper Range '+this.upperRange);
      this.loansearch.searchAccountByBalanceRange(this.lowerRange,this.upperRange).subscribe(
        response =>{
          this.accounts=response;
          console.log(JSON.stringify(this.accounts))
        },
        error=>{
          console.log("Error Fetching Accounts " +error)
        }
      )

    }

    searchAccountWithBalanceNull(){
      this.loansearch.searchAccountWithBalanceNull().subscribe(
        response =>{
          this.accounts=response;
          console.log(JSON.stringify(this.accounts))
        },
        error=>{
          console.log("Error Fetching Accounts " +error)
        }
      )
    }

    searchAccountWithBalanceNotNull(){
      this.loansearch.searchAccountWithBalanceNotNull().subscribe(
        response =>{
          this.accounts=response;
          console.log(JSON.stringify(this.accounts))
        },
        error=>{
          console.log("Error Fetching Accounts " +error)
        }
      )
    }

    searchDistinctAccountByBalance(){
      console.log("Inpu Balance Amount" +this.balance);
      this.loansearch.searchDistinctAccountByBalance(this.balance).subscribe(
        response =>{
          this.accounts=response;
          console.log(JSON.stringify(this.accounts))
        },
        error=>{
          console.log("Error Fetching Accounts " +error)
        }
      )
    }
  }
