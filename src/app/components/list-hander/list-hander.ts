import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-hander',
  imports: [CommonModule],
  templateUrl: './list-hander.html',
  styleUrl: './list-hander.css'
})
export class ListHander {
  animals = [
    {name:"Turca", type:"Dog"},
    {name:"Tom", type:"Cat"},
    {name:"Frida", type:"Cat"},
    {name:"Bob", type:"Dog"},
  ]
}
