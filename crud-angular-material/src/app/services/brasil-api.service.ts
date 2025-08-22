import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { estados } from '../models/brasilApi';

@Injectable({
  providedIn: 'root'
})
export class BrasilApiService {
  constructor(private http:HttpClient){}

  baseURL:string = "https://brasilapi.com.br/api"

  listarUFs(): Observable<estados[]>{
    const path = "/ibge/uf/v1"
    return this.http.get<estados[]>(this.baseURL + path);
  }

}
