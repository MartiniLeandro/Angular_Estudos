import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../../models/categoryData';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPI {
  constructor(private api:HttpClient){}

  urlAPI:string = "http://localhost:8080/categories"

  getAllCategories():Observable<category[]>{
    return this.api.get<category[]>(this.urlAPI);
  }

  getCategoryById(id:number):Observable<category>{
    return this.api.get<category>(this.urlAPI + `/${id}`)
  }
  
}
