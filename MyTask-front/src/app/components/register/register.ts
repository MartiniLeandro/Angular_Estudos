import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink,Router } from '@angular/router';
import { authApi } from '../../services/authApi.service';
import { register } from '../../models/register';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  constructor(private api:authApi, private router:Router, private snackBar:MatSnackBar){}

  name:string = '';
  email:string = '';
  password:string = '';

  registerUser(){
    const data:register = {name:this.name, email:this.email, password:this.password};
    this.api.registerUser(data).subscribe({next: (data) => {
      this.snackBar.open("Usuário Cadastrado","fechar")
      this.router.navigate(['/login'])
    },error: (e) => {
      console.log(e)
    }})
  }

}
