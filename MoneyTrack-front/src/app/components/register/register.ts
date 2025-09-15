import { Component } from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthAPI } from '../../services/auth/auth-api.service';
import { register } from '../../models/registerData';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports: [RouterModule,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  constructor(private authAPI:AuthAPI, private router:Router, private snackBar:MatSnackBar){}


  nome:string='';
  cpf:string='';
  email:string='';
  senha:string='';

  registerUser(){
    let newUser:register = {name:this.nome, cpf:this.cpf, email:this.email, password:this.senha} 
    this.authAPI.registerUser(newUser).subscribe(data => {
      console.log(data)
      this.router.navigate(['/authentication/login'])
      this.snackBar.open("Usuário cadastrado", "fechar", {duration:3000})
    })
  }

}
