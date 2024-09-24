import { Address } from "./Address";

export class Account{
    name:string;
    mobilenumber:string;
    pan:string;
    balance:number;
    accountNumber:string;
    address?:Address;

    constructor(name:string,mobilenumber:string,pan:string,balance:number,accountNumber:string,address:Address){

        this.name=name;
        this.mobilenumber=mobilenumber;
        this.pan=pan;
        this.balance=balance;
        this.accountNumber=accountNumber;
        this.address=address;
    }
}