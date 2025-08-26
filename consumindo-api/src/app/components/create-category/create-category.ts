import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Categorias } from '../../models/categorias';

@Component({
  selector: 'app-create-category',
  imports: [MatFormField,MatSelectModule,MatInputModule,FormsModule],
  templateUrl: './create-category.html',
  styleUrl: './create-category.scss'
})
export class CreateCategory {
  constructor(private apiService:ApiService){}

  nome = "";
  descricao="";

  criarCategoria(){
    const newCategoria:Categorias = {nome: this.nome, descricao: this.descricao};
    this.apiService.postCategorias(newCategoria).subscribe(data => console.log(data));
    this.nome = "";
    this.descricao = '';
  }
}
