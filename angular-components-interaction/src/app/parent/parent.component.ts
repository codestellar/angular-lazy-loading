import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  message: string;  
  messageFromChild: string;

  constructor() { 
    this.message = "Hello Child";
  }

  ngOnInit() {
  }

  receiveMessage(data){
    this.messageFromChild = data;
  }
}
