import { Routes } from '@angular/router';
import { CreateCategory } from './components/create-category/create-category';
import { FindAllCategories } from './components/find-all-categories/find-all-categories';
import { FindCategoryById } from './components/find-category-by-id/find-category-by-id';
import { UpdateCategory } from './components/update-category/update-category';
import { DeleteCategory } from './components/delete-category/delete-category';
import { StartComponent } from './components/start-component/start-component';

export const routes: Routes = [
    {path:"", component:StartComponent},
    {path:"categorias/create", component:CreateCategory},
    {path:"categorias/getAll", component:FindAllCategories},
    {path:"categorias/getById", component:FindCategoryById},
    {path:"categorias/update", component:UpdateCategory},
    {path:"categorias/delete", component:DeleteCategory}
];
