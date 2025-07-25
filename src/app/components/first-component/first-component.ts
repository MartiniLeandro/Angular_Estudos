import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {
  name:string = "Leandro";
  age:number = 20;
  job:string = "Programmer";
  hobbie = ["Running"];
  car = {name: "Camaro"};
}
