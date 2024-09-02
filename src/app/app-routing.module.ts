import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path:'createAccount',component:AccountComponent},
  {path:'createAtm',component:CreateatmComponent},
  {path:'transfer',component:TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
