import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './itemList';

@Component({
  selector: 'app-lista-compra',
  imports: [FormsModule],
  templateUrl: './lista-compra.html',
  styleUrl: './lista-compra.scss'
})
export class ListaCompra {
  item ='';
  items:ItemList[]= [];

  addItem(){
    let newItem = new ItemList();
    newItem.nome = this.item;
    newItem.id = this.items.length + 1
    this.items.push(newItem);
    this.item='';
  }
  
}
