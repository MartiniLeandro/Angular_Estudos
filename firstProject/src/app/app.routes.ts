import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListHander } from './components/list-hander/list-hander';
import { IfRender } from './components/if-render/if-render';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { Eventos } from './components/eventos/eventos';
import { PipeOperator } from './components/pipe-operator/pipe-operator';
import { ChangeNumber } from './components/change-number/change-number';
import { Emitter } from './components/emitter/emitter';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';

export const routes: Routes = [
    {path:'', component:FirstComponent},
    {path:'list', component:ListHander},
    {path:'parent-data', component:ParentData},
    {path:'directives',component:Directives},
    {path: 'if-render', component:IfRender},
    {path:'eventos', component:Eventos},
    {path:'pipe-operator',component:PipeOperator},
    {path:'change-number',component:ChangeNumber},
    {path:'emmiter',component:Emitter},
    {path:'two-way-databind',component:TwoWayBinding}
];
