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

  loginUser(body:login):Observable<string>{
    return this.http.post<string>(this.urlAPI + `/login`, body)
  }
  
}
