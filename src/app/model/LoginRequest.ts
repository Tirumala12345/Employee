export class LoginRequest {
    cardNumber: string;
    pin: string;

    constructor(  cardNumber: string,
        pin: string){
            this.cardNumber=cardNumber;
            this.pin=pin;
        }
  }