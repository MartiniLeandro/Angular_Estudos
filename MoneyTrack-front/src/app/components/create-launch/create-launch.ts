import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { CategoryAPI } from '../../services/category/category.service';
import { category } from '../../models/categoryData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-launch',
  imports: [Navbar, CommonModule],
  templateUrl: './create-launch.html',
  styleUrl: './create-launch.scss'
})
export class CreateLaunch {
  constructor(private categoryAPI:CategoryAPI){}

  categoriesExpense:category[] = [];
  categoriesRevenue:category[] = [];
  notShowExpenses:boolean = true
  notShowRevenues:boolean = true

  ngOnInit(){
    this.getCategories()
  }

  getCategories(){
    this.categoryAPI.getAllCategories().subscribe(datas => {
      for(let data of datas){
        if(data.typeValue == "EXPENSE"){
          this.categoriesExpense.push(data)
        }else {
          this.categoriesRevenue.push(data)
        }
      }

      console.log(this.categoriesExpense)
      console.log(this.categoriesRevenue)
    })
  }

  showExpenses(){
    this.notShowExpenses = false
    this.notShowRevenues = true
  }
  showRevenues(){
    this.notShowRevenues = false;
    this.notShowExpenses = true
  }
}
