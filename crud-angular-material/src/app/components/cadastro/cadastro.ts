import { Component } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from '@angular/forms'
import {MatFormField} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { estados, municipios } from '../../models/brasilApi';
import { BrasilApiService } from '../../services/brasil-api.service';


@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormField, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {
  constructor(private clienteService:ClienteService,private brasilApiService:BrasilApiService, private route:ActivatedRoute, private router:Router){}

  cliente:Cliente = Cliente.newCliente();
  atualizando:boolean = false;
  estados:estados[] = [];
  municipios:municipios[] = [];

  ngOnInit(){
    this.route.queryParamMap.subscribe((query:any) => {
      const params = query['params'];
      const id = params['id'];
      if(id){
        let clienteEncontrado = this.clienteService.buscarClientePorId(id);
        if(clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    })
    this.listarUFs();
  }

  salvar(){
    if(!this.atualizando){
      this.clienteService.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
    }else{
      this.clienteService.atualizar(this.cliente);
      this.router.navigate(['/consulta'])

    }
  }

  listarUFs(){
    this.brasilApiService.listarUFs().subscribe(
      {next: listaEstados => console.log(listaEstados), error: erro => console.log(erro)});
  }
}
