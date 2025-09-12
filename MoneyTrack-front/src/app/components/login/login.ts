import { Component } from '@angular/core';
import { AuthAPI } from '../../services/auth/auth-api.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private authAPI:AuthAPI){}


}
