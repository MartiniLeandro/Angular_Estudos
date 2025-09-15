import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../../models/loginData';
import { Observable } from 'rxjs';
import { register } from '../../models/registerData';

@Injectable({
  providedIn: 'root'
})
export class AuthAPI {
  constructor(private authAPI:HttpClient){}

  urlAPI = "http://localhost:8080/authentication"

  loginUser(body:login):Observable<{token:string}>{
    return this.authAPI.post<{token:string}>(this.urlAPI + "/login", body);
  }

  registerUser(body:register):Observable<register>{
    return this.authAPI.post<register>(this.urlAPI + "/register",body)
  }
  
}
