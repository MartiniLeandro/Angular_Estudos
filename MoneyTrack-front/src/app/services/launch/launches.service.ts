import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { launch } from '../../models/launchData';

@Injectable({
  providedIn: 'root'
})
export class Launches {
  constructor(private launchAPI:HttpClient){}

  urlAPI = "http://localhost:8080/user/launches"

  
  getAllTasks():Observable<launch[]>{
    return this.launchAPI.get<launch[]>(this.urlAPI)
  }
}
