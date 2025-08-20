import { Injectable } from '@angular/core';
import { Cliente } from '../components/cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static repo_clientes = "_clientes"
  
  private obterStorage():Cliente[]{
    const repositorioClientes = localStorage.getItem(ClienteService.repo_clientes);
    if(repositorioClientes){
      const clientes:Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes:Cliente[] = [];
    localStorage.setItem(ClienteService.repo_clientes,JSON.stringify(clientes));
    return clientes;
  }

  salvar(cliente:Cliente){
    const clientesStorage = this.obterStorage();
    clientesStorage.push(cliente);

    localStorage.setItem(ClienteService.repo_clientes,JSON.stringify(clientesStorage))
  }

  pesquisarClientes(nome:string):Cliente[]{
    return this.obterStorage()
  }
}
