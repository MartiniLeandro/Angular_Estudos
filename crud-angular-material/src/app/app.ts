import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, RouterOutlet, RouterLink, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-angular-material');
}
