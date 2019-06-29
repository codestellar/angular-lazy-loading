import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {


  _messageForChild: string;
  _messageForParent: string;


  @Input() messageForChild: string;

  // @Input()
  //   set messageForChild(message: string){
  //     this._messageForChild = message + ' some more from child';
  //   };
  //   get messageForChild(){
  //     return this._messageForChild;
  //   };

  @Output() onMessageSend = new EventEmitter();
  changeLog: string[];

  ngOnChanges(changes: {[propKey:string]: SimpleChange}): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    for(let index in changes){
      console.log(changes[index].previousValue);
      console.log(changes[index].currentValue);      
    }    
  }

  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(){
    this.onMessageSend.emit(this._messageForParent);
  }



}
