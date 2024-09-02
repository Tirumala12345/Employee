export class Atm{
    cardnumber:string;
    pin:string
    cvv:string
    expiry:Date;
    accountnumber:string;

    constructor( cardnumber:string,pin:string,cvv:string,expiry:Date,accountnumber:string){
        this.cardnumber=cardnumber;
        this.pin=pin;
        this.cvv=cvv;
        this.expiry=expiry;
        this.accountnumber=accountnumber;
    }
}