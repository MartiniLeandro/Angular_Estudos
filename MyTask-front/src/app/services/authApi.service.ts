import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/Login';
import { register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class authApi {
  constructor(private http:HttpClient){}

  urlAPI = "http://localhost:8080/auth"

  loginUser(body:login):Observable<{token:string}>{
    return this.http.post<{token:string}>(this.urlAPI + `/login`, body);
  }

  registerUser(body:register):Observable<register> {
    return this.http.post<register>(this.urlAPI  + "/register", body);
  }
  
}
