import { Component } from '@angular/core';
import { MyTaskAPI } from '../../services/my-task-api.service';
import { task } from '../../models/Task';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  imports: [FormsModule, NgClass],
  templateUrl: './first-page.html',
  styleUrl: './first-page.scss'
})
export class FirstPage {
  constructor(private taskAPI:MyTaskAPI, private snackBar:MatSnackBar, private router:Router){}

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
      this.allTasks.push(task)
      this.snackBar.open("Task criada", "fechar", {duration: 3000})
      task.editing = false
      this.taskName = '';
    },
      error: erro => console.log(erro)
    },);
  }

  editTaskName(task:task){
    let updatedTask:task = {taskName: this.taskNameEdited, status:"NOT_COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe({next: task => {
      task.editing = false;
      this.snackBar.open("task editada", "fechar", {duration: 3000})
      this.taskNameEdited = '';
      this.ngOnInit();},

      error: erro => {
        console.log(erro);
      }
    })
  }

  checkTask(task:task){
    let updatedTask:task = {taskName: task.taskName, status: "COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(() => {
      this.snackBar.open("task concluída", "fechar", {duration: 3000})
      this.ngOnInit();
    });
  }

  revertTask(task:task){
    let updatedTask:task = {taskName: task.taskName, status: "NOT_COMPLETED"}
    this.taskAPI.updateTask(updatedTask,task.id!).subscribe(() => {
      this.snackBar.open("task não completa", "fechar", {duration: 3000})
      this.ngOnInit();
    });
  }
  
  editTask(task:task){
    task.editing = true;
  }

  deleteTask(task:task){
    this.taskAPI.deleteTask(task.id!).subscribe(() => {
      this.snackBar.open("task deletada", "fechar", {duration: 3000})
      this.allTasks = this.allTasks.filter(tasks => tasks.id !== task.id)
    })
  }

  logout(){
    sessionStorage.removeItem("token")
    this.snackBar.open("Usuário desconectado", "fechar", {duration: 3000})
    this.router.navigate(['/login'])
  }
}
