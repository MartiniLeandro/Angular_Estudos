import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../models/categorias';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}

  apiUrl = "http://localhost:3000"

  getCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>(this.apiUrl + "/categorias")
  }

  postCategorias(novaCategoria:Categorias): Observable<Categorias> {
    return this.http.post<Categorias>(this.apiUrl + "/categorias", novaCategoria)
  }
}
