import { Component } from '@angular/core';
import { Address } from '../model/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  address:Address=new Address('','','','','');

  saveAddress():void{}
}
