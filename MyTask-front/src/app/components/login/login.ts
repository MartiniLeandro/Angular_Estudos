import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginAPIService } from '../../services/login-api.service';
import { login } from '../../models/Login';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private loginAPI:LoginAPIService, private router:Router){}

  email:string = '';
  password:string = '';

  login(){
    this.router.navigate(['/tasks'])
  }
}
