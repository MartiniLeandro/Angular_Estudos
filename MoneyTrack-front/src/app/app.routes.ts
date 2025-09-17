import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { LaunchesPage } from './components/launches-page/launches-page';
import { CreateLaunch } from './components/create-launch/create-launch';
import { UpdateLaunch } from './components/update-launch/update-launch';

export const routes: Routes = [
    {path:'', redirectTo:'authentication/login', pathMatch:'full'},
    {path:'authentication/login', component:Login},
    {path:'authentication/register', component:Register},
    {path:'user/launches', component:LaunchesPage},
    {path:'user/launches/create', component:CreateLaunch},
    {path:'user/launches/update', component:UpdateLaunch}
];
