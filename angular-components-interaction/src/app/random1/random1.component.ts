import { Component, OnInit } from '@angular/core';
import { RandomService } from '../services/random.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-random1',
  templateUrl: './random1.component.html',
  styleUrls: ['./random1.component.css']
})
export class Random1Component implements OnInit {

  customer: Customer = {
    id: 1,
    name: 'Gaurav'
  };

  constructor(private randomService: RandomService) { }

  ngOnInit() {
  }

  setCustomer(customer: Customer){
    this.randomService.setCustomer(customer);
  }

}
