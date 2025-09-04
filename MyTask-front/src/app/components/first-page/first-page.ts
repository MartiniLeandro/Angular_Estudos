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
      console.log(allTasks)
      this.allTasks = allTasks;
    }) 
  }

  createTask(){
    let task:task = {taskName: this.taskName}
    this.taskAPI.createTask(task).subscribe({next: task => {
      console.log(task)
      this.allTasks.push(task)
      task.editing = false
      this.taskName = '';
    },
      error: erro => alert(erro.error.msg)
    },);
  }

  editTaskName(task:task){
    let updatedTask:task = {taskName: this.taskNameEdited, status:"NOT_COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe({next: task => {
      task.editing = false;
      this.taskNameEdited = '';
      this.ngOnInit();},

      error: erro => {
        alert(erro.error.msg);
      }
    })
  }

  checkTask(task:task){
    let updatedTask:task = {taskName: task.taskName, status: "COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(() => {
      this.ngOnInit();
    });
  }

  revertTask(task:task){
    let updatedTask:task = {taskName: task.taskName, status: "NOT_COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(() => {
      this.ngOnInit();
    });
  }
  
  editTask(task:task){
    task.editing = true;
  }

  deleteTask(task:task){
    this.taskAPI.deleteTask(task.id!).subscribe(() => {
      this.allTasks = this.allTasks.filter(tasks => tasks.id !== task.id)
    })
  }
}
