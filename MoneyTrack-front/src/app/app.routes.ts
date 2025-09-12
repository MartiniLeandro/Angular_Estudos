import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'', redirectTo:'authentication/login', pathMatch:'full'},
    {path:'authentication/login', component:Login},
    {path:'authentication/register', component:Register}
];
