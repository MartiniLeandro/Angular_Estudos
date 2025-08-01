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
    {name:"Turca",weight:"7kg", type:"Dog",age:7},
    {name:"Tom",weight:"5kg", type:"Cat", age:3},
    {name:"Frida",weight:"2kg", type:"Cat", age: 4},
    {name:"Bob",weight:"9kg", type:"Dog", age:2},
]
}
