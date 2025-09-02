import { Component } from '@angular/core';
import { MyTaskAPI } from '../../services/my-task-api.service';
import { task } from '../../models/Task';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-first-page',
  imports: [FormsModule, NgClass],
  templateUrl: './first-page.html',
  styleUrl: './first-page.scss'
})
export class FirstPage {
  constructor(private taskAPI:MyTaskAPI){}

  allTasks:task[] = [];
  taskName:string = '';
  taskNameEdited:string = '';


  ngOnInit(){
    this.findAllTasks()
  }


  findAllTasks(){
    this.taskAPI.findAllTasks().subscribe(allTasks => {
      this.allTasks = allTasks;
    }) 
  }

  createTask(){
    let task:task = {taskName: this.taskName}
    this.taskAPI.createTask(task).subscribe(task => {
      this.allTasks.push(task)
      task.editing = false
      this.taskName = '';
    });
    console.log(this.allTasks)
  }

  editTaskName(task:task){
    let updatedTask:task = {taskName: this.taskNameEdited, status:"NOT_COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(task => {
      console.log("update feito");
      task.editing = false;
      this.taskNameEdited = '';
      this.ngOnInit();
    })
  }

  checkTask(task:task){
    let updatedTask:task = {taskName: task.taskName, status: "COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(() => {
      console.log("update feito");
      this.ngOnInit();
    });
  }

  revertTask(task:task){
    let updatedTask:task = {taskName: task.taskName, status: "NOT_COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(() => {
      console.log("update feito");
      this.ngOnInit();
    });
  }
  
  editTask(task:task){
    task.editing = true;
  }

  deleteTask(task:task){
    this.taskAPI.deleteTask(task.id!).subscribe(() => {
      console.log("task deletada")
      this.allTasks = this.allTasks.filter(tasks => tasks.id !== task.id)
    })
  }
}
