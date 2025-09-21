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

  
  getAllLaunches():Observable<launch[]>{
    return this.launchAPI.get<launch[]>(this.urlAPI)
  }

  updateLaunch(id:number,launch:launch):Observable<launch>{
    return this.launchAPI.put<launch>(this.urlAPI + `/update/${id}`,launch)
  }

  deleteLaunch(id:number):Observable<void>{
    return this.launchAPI.delete<void>(this.urlAPI + `delete/${id}`)
  }

  createLaunch(launch:launch):Observable<launch>{
  return this.launchAPI.post<launch>(this.urlAPI + "/create", launch)
  }
}
