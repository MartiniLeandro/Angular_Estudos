import { Component } from '@angular/core';
import { MyTaskAPI } from '../../services/my-task-api.service';

@Component({
  selector: 'app-first-page',
  imports: [],
  templateUrl: './first-page.html',
  styleUrl: './first-page.scss'
})
export class FirstPage {
  constructor(private taskAPI:MyTaskAPI){}

  testP = false

  testConnection(){
    this.taskAPI.findAllTasks().subscribe(dados => {
      console.log(dados);
      this.testP = true;
    }) 
  }
}
