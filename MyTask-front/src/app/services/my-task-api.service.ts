import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class MyTaskAPI {
  constructor(private http:HttpClient){}
  
  urlAPI = "http://localhost:8080"

  findAllTasks():Observable<task[]>{
    return this.http.get<task[]>(this.urlAPI + "/tasks")
  }
}
