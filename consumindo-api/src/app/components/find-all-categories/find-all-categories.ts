import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Categorias} from '../../models/categorias';

@Component({
  selector: 'app-find-all-categories',
  imports: [],
  templateUrl: './find-all-categories.html',
  styleUrl: './find-all-categories.scss'
})
export class FindAllCategories {
  constructor(private apiService:ApiService){}

  categorias:Categorias[] = [];
  newCategoria:Categorias = {nome:"teste", descricao:"teste teste"}

  ngOnInit(){
    this.getCategorias();
  }

  getCategorias(): void{
    this.apiService.getCategorias().subscribe({
      next: dados => this.categorias = dados,
      error: erro => console.log(erro)
    });
  }

}
