import { Routes } from '@angular/router';
import { FirstPage } from './components/first-page/first-page';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch:'full'},
    {path:'login', component:Login},
    {path:'register', component:Register},
    {path:'tasks', component:FirstPage},
];
