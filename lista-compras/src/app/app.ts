import { Component, signal } from '@angular/core';
import { ListaCompra } from "./components/lista-compra/lista-compra";

@Component({
  selector: 'app-root',
  imports: [ListaCompra],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lista-compras');
}
