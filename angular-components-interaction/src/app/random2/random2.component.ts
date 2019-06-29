import { Component, OnInit } from '@angular/core';
import { RandomService } from '../services/random.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-random2',
  templateUrl: './random2.component.html',
  styleUrls: ['./random2.component.css']
})
export class Random2Component implements OnInit {

  customer: Customer;
  constructor(private randomService: RandomService) { 
    
  }

  ngOnInit() {
       
  }

  getCustomer(){
    this.customer = this.randomService.getCustomer();
  }
}
