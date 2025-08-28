import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Categorias } from '../../models/categoriaUpdate';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-delete-category',
  imports: [FormsModule],
  templateUrl: './delete-category.html',
  styleUrl: './delete-category.scss'
})
export class DeleteCategory {
  constructor(private apiService:ApiService){}

  deletedCategory:Categorias = {id:'',nome:'',descricao:''};
  deletarCategory:boolean = false;

  deletarCategoryFunction(){
    this.apiService.DeleteCategory(this.deletedCategory.id).subscribe((data) => {
      if(data ==null){
        console.log("erro ao deletar categoria")
      }else{
        console.log(data)
        this.deletarCategory = true
        this.deletedCategory.id='';
      }
    });
  }
}
