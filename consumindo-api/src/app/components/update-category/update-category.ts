import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormsModule } from '@angular/forms';
import { Categorias } from '../../models/categoriaUpdate';

@Component({
  selector: 'app-update-category',
  imports: [FormsModule],
  templateUrl: './update-category.html',
  styleUrl: './update-category.scss'
})
export class UpdateCategory {
  constructor(private apiService:ApiService){}

  newCategory:Categorias = {id:'',nome:'',descricao:''};
  showNewCategory = false;

  atualizarCategory(){
    this.apiService.updateCategory(this.newCategory.id,this.newCategory).subscribe((dados) => {
      console.log("categoria alterada: " + dados);
      this.showNewCategory = true;
    })
  }
}
