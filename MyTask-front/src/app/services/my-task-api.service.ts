import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class MyTaskAPI {
  constructor(private http:HttpClient){}
  
  urlAPI = "http://localhost:8080/tasks"

  findAllTasks():Observable<task[]>{
    return this.http.get<task[]>(this.urlAPI);
  }

  createTask(Task:task):Observable<task>{
    return this.http.post<task>(this.urlAPI,Task);
  }

  updateTask(task:task, id:number):Observable<task> {
    return this.http.put<task>(this.urlAPI + "/" +id , task);
  }

  deleteTask(id:number):Observable<void>{
    return this.http.delete<void>(this.urlAPI + "/" + id);
  }
}
