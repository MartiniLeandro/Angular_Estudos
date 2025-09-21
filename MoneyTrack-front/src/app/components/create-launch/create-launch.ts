import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { CategoryAPI } from '../../services/category/category.service';
import { category } from '../../models/categoryData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Launches } from '../../services/launch/launches.service';
import { launch } from '../../models/launchData';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-launch',
  imports: [Navbar, CommonModule,FormsModule],
  templateUrl: './create-launch.html',
  styleUrl: './create-launch.scss'
})
export class CreateLaunch {
  constructor(private categoryAPI:CategoryAPI, private launchAPI:Launches, private snackBar:MatSnackBar, private router:Router){}

  categoriesExpense:category[] = [];
  categoriesRevenue:category[] = [];
  notShowExpenses:boolean = true
  notShowRevenues:boolean = true
  selectedCategoryId:number = 0;
  descCategory:string = '';
  valueCategory:number = 0;
  dataCategory:string = '';

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

  toggleBtn(id:number){
    this.selectedCategoryId = id;
  }

  createLaunch(){
    let categorySelected:category;
    this.categoryAPI.getCategoryById(this.selectedCategoryId).subscribe(category =>{
      categorySelected = category;
      const newLaunch:launch = {
        category: category,
        description: this.descCategory,
        value: this.valueCategory,
        date: this.dataCategory
      }
      this.saveLaunch(newLaunch);
    })
  }

  saveLaunch(newLaunch:launch){
    this.launchAPI.createLaunch(newLaunch).subscribe(launch => {
      this.snackBar.open("Lançamento criado","fechar", {duration:3000})
      this.router.navigate(["/user/launches"])
    })
  }
}
