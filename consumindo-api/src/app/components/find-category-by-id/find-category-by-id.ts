import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Categorias } from '../../models/categorias';

@Component({
  selector: 'app-find-category-by-id',
  imports: [FormsModule],
  templateUrl: './find-category-by-id.html',
  styleUrl: './find-category-by-id.scss'
})
export class FindCategoryById {
  constructor(private apiService:ApiService){}

  id="";
  categoria:Categorias = {nome: '', descricao: ''}
  showCategory:boolean = false

  findById(){
    this.apiService.getCategoryById(this.id).subscribe({
      next: dado => {
        this.categoria.id = dado.id;
        this.categoria.nome = dado.nome;
        this.categoria.descricao = dado.descricao;
        this.showCategory = true;
      },
      error: () => {
        console.log("Não existe categoria com este ID")
        this.showCategory = false;
      }
  });
  }
}
