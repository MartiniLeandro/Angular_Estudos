import { Component } from '@angular/core';
import { ChangeNumber } from "../change-number/change-number";

@Component({
  selector: 'app-emitter',
  imports: [ChangeNumber],
  templateUrl: './emitter.html',
  styleUrl: './emitter.css'
})
export class Emitter {
  myNumber:number = 0;

  addNumber(){
    this.myNumber++
  }

  subNumber(){
    this.myNumber--
  }
}
