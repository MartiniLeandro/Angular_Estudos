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

  allClientes():Cliente[]{
    return this.obterStorage()
  }

  ClientesByName(name:string):Cliente[]{
    const allClientes = this.obterStorage();
    if(!name){
      return allClientes;
    }

    return allClientes.filter(cliente => cliente.nome?.indexOf(name) !== -1);
  }

  buscarClientePorId(id:string):Cliente | undefined{
    const allClientes = this.obterStorage();
    return allClientes.find(cliente => cliente.id === id);
  }
}
