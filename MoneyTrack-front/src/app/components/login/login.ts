import { Component } from '@angular/core';
import { AuthAPI } from '../../services/auth/auth-api.service';
import { FormsModule } from '@angular/forms';
import { login } from '../../models/loginData';
import {RouterModule, Router} from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private authAPI:AuthAPI, private router:Router, private snackBar:MatSnackBar){}

  email:string='';
  senha:string='';

  loginUser() {
    let user:login = {email:this.email, password:this.senha}
    this.authAPI.loginUser(user).subscribe({next:data => {
      sessionStorage.setItem("token", data.token)
      this.router.navigate(['/user/launches'])
      this.snackBar.open("Você entrou!", "fechar", {duration: 3000})
    }, error: error => this.snackBar.open(error.error.message, "fechar", {duration: 3000})})
  }

}
