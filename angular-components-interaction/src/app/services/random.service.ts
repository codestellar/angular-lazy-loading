import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  _customer: Customer;
  constructor() { 
    
  }

  setCustomer(customer: Customer){
    this._customer = customer;
    console.log(this._customer);
  }

  getCustomer(){
    console.log('getting customer...');
    console.log(this._customer);
    return this._customer;
  }
}
