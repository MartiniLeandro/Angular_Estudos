import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { authApi } from '../../services/authApi.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { login } from '../../models/Login';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private loginAPI:authApi, private router:Router){}

  email:string = '';
  password:string = '';

  login(){
    const userCredentials:login = {email:this.email, password:this.password};
    this.loginAPI.loginUser(userCredentials).subscribe({next: token => {
      console.log(token.token)
      sessionStorage.setItem("token", token.token)
      this.router.navigate(['/tasks'])
    }, error: (e) =>{
        console.log(e)
    }})
  }
}
