import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
 @Input() text:String = "Criar lançamento"
 @Input() textLink:String = "/user/launches/create"

}
