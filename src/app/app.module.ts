import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateatmComponent } from './createatm/createatm.component';
import { TransferComponent } from './transfer/transfer.component';
import { AtmloginComponent } from './atmlogin/atmlogin.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoansearchComponent } from './loansearch/loansearch.component';
import { AddressComponent } from './address/address.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeformComponent,
    AccountComponent,
    CreateatmComponent,
    TransferComponent,
    AtmloginComponent,
    TransactionComponent,
    WithdrawComponent,
    DepositComponent,
    NavbarComponent,
    LoansearchComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
