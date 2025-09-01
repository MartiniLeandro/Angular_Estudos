import { Component, signal } from '@angular/core';
import { FirstPage } from "./components/first-page/first-page";

@Component({
  selector: 'app-root',
  imports: [FirstPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyTask-front');
}
