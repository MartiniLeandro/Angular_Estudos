import { Routes } from '@angular/router';
import { FirstPage } from './components/first-page/first-page';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'', component:FirstPage},
];
