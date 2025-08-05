import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.html',
  styleUrl: './change-number.css'
})
export class ChangeNumber {
  @Output() addNumberClick: EventEmitter<any> = new EventEmitter();
  @Output() subNumberClick: EventEmitter<any> = new EventEmitter();

  addNumber(){
    this.addNumberClick.emit();
  }

  subNumber(){
    this.subNumberClick.emit();
  }


}
