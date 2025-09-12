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

  urlAPI = "http://localhost:8000/authentication"

  loginUser(body:login):Observable<{token:string}>{
    return this.authAPI.post<{token:string}>(this.urlAPI, body);
  }

  registerUser(body:register){
    return null;
  }
  
}
