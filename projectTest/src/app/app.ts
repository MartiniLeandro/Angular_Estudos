import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { FirstPage } from "./components/first-page/first-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FirstPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectTest');
}
