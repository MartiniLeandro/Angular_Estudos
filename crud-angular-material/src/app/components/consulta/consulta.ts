import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import { ClienteService } from '../../services/clienteService';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [MatInputModule, MatCardModule, FlexLayoutModule, MatIconModule, FormsModule, MatTableModule, MatButtonModule,CommonModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta{
  constructor(private clienteService:ClienteService){}

  listaClientes:Cliente[] = [];
  colunasTable:string[] = ["id","nome","cpf","dataNascimento","email"]

  ngOnInit(){
    this.listaClientes = this.clienteService.pesquisarClientes("");
  }

}
