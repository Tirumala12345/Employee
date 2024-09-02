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

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeformComponent,
    AccountComponent,
    CreateatmComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
