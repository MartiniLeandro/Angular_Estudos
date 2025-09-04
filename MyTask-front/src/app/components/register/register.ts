import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink,Router } from '@angular/router';
import { authApi } from '../../services/authApi.service';
import { register } from '../../models/register';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  constructor(private api:authApi, private router:Router){}

  name:string = '';
  email:string = '';
  password:string = '';

  registerUser(){
    const data:register = {name:this.name, email:this.email, password:this.password};
    this.api.registerUser(data).subscribe({next: (data) => {
      alert("Usuário cadastrado!!!")
      this.router.navigate(['/login'])
    },error: (e) => {
      alert("Erro:" + e)
    }})
  }

}
