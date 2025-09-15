import { Component } from '@angular/core';
import { AuthAPI } from '../../services/auth/auth-api.service';
import { FormsModule } from '@angular/forms';
import { login } from '../../models/loginData';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private authAPI:AuthAPI){}

  email:string='';
  senha:string='';

  loginUser() {
    let user:login = {email:this.email, password:this.senha}
    this.authAPI.loginUser(user).subscribe(data => console.log(data))
  }

}
