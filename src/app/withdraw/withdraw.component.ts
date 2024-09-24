import { Component } from '@angular/core';
import { WithdrawService } from '../withdraw.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
  accountNumber: string = '';
  amount:number=0;
  message: string = '';

  constructor(private withdrawService:WithdrawService){}

  withdraw() {
    const withdrawRequest ={
      accountNumber:this.accountNumber,
      amount:this.amount,
     
    };
    this.withdrawService.withdraw(withdrawRequest).subscribe(
      response =>{
        this.message=response;
        console.log(this.accountNumber,this.amount)
        console.log('hello from withdraw '+response)
      },
      error =>{
        this.message='Error occured during Withdraw';
      }
    )
  }
}
