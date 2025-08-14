import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {

  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;

  somarResultado(){
    console.log("teste");
    this.resultado = this.numero1 + this.numero2
  }
}
