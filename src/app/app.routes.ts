import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListHander } from './components/list-hander/list-hander';

export const routes: Routes = [
    {path:'', component:FirstComponent},
    {path:'list', component:ListHander}
];
