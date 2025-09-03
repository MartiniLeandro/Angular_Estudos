import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {
  constructor(private http:HttpClient){}

  urlAPI = "http://localhost:8080/auth"

  loginUser(body:login):Observable<{token:string}>{
    return this.http.post<{token:string}>(this.urlAPI + `/login`, body)
  }
  
}
