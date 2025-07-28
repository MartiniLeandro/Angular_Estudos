import { Component, signal } from '@angular/core';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Eventos } from "./components/eventos/eventos";
import { Emitter } from './components/emitter/emitter';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, ParentData, Directives, IfRender, Eventos,Emitter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject-Angular');

  userName:string = "Leandro";
  userData = {email: "leandro@email.com", idade: 20};
}
