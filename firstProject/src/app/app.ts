import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject-Angular');

  userName:string = "Leandro";
  userData = {email: "leandro@email.com", idade: 20};
  teste:string = "teste";
}
