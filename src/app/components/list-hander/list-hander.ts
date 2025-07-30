import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-hander',
  imports: [CommonModule],
  templateUrl: './list-hander.html',
  styleUrl: './list-hander.css'
})
export class ListHander {
  animals: Animal[] = [
    {name:"Turca", type:"Dog",age:7},
    {name:"Tom", type:"Cat", age:3},
    {name:"Frida", type:"Cat", age: 4},
    {name:"Bob", type:"Dog", age:2},
]
}
