import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { TransferComponent } from './transfer/transfer.component';
import { AtmloginComponent } from './atmlogin/atmlogin.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [
  {path:'createAccount',component:AccountComponent},
  {path:'createAtm',component:CreateatmComponent},
  {path:'transfer',component:TransferComponent},
  {path:'atmLogin',component:AtmloginComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'deposit',component:DepositComponent},
  {path:'loansearch',component:LoansearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
