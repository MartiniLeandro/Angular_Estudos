import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Eventos } from "./components/eventos/eventos";
import { Emitter } from './components/emitter/emitter';
import { ListHander } from "./components/list-hander/list-hander";
import { PipeOperator } from "./components/pipe-operator/pipe-operator";
import { TwoWayBinding } from "./components/two-way-binding/two-way-binding";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, ParentData, Directives, IfRender, Eventos, Emitter, ListHander, PipeOperator, TwoWayBinding, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject-Angular');

  userName:string = "Leandro";
  userData = {email: "leandro@email.com", idade: 20};
}
