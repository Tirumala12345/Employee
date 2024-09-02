export class Account{
    name:string;
    mobilenumber:string;
    pan:string;
    balance:number;
    accountNumber:string;

    constructor(name:string,mobilenumber:string,pan:string,balance:number,accountNumber:string){

        this.name=name;
        this.mobilenumber=mobilenumber;
        this.pan=pan;
        this.balance=balance;
        this.accountNumber=accountNumber;
    }
}