import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class MyTaskAPI {
  constructor(private http:HttpClient){}
  
  urlAPI = "http://localhost:8080/tasks"

  loadAllTasks(page:number = 0, size:number = 6):Observable<any>{
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString())
    return this.http.get<any>(this.urlAPI, {params});
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
