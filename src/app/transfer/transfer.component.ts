import { Component } from '@angular/core';
import { Transfer } from '../model/Transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {

  transfer:Transfer={
    fromAccount:'',
    toAccount: '',
    amount: 0
  }

  constructor(private transferService:TransferService){}

  transferAmount(){
 
    this.transferService.transferAmount(this.transfer).subscribe(
      response =>{
        console.log('Transfer Successful :' +response)
      },
      error =>{
 
        console.log('Transfer failed :' +error);
      }
    )

  }

}
