import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Launches } from '../../services/launch/launches.service';
import { category } from '../../models/categoryData';
import { launch } from '../../models/launchData';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryAPI } from '../../services/category/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-launch',
  imports: [Navbar,FormsModule,CommonModule],
  templateUrl: './update-launch.html',
  styleUrl: './update-launch.scss'
})
export class UpdateLaunch {
  constructor(private route:ActivatedRoute, private launchService:Launches,private router:Router, private SnackBar:MatSnackBar, private categoryService:CategoryAPI){}

  launchId:number = 0;
  category!:category;
  revenueCategories:category[] = [];
  expenseCategories:category[] = [];
  notShowExpenses:boolean = true;
  notShowRevenues:boolean = true;
  descCategory:string = '';
  valueCategory:number = 0;
  dateCategory:string = '';
  selectedCategoryId:number = 0;


  ngOnInit(){
    this.categoryService.getAllCategories().subscribe(categories => {
      for(let category of categories){
        if(category.typeValue == "REVENUE"){
          this.revenueCategories.push(category)
        }else {
          this.expenseCategories.push(category);
        }
      }
      console.log(this.revenueCategories)
      console.log(this.expenseCategories)
    })
    const idUrl = this.route.snapshot.paramMap.get('id')
    if(idUrl){
      this.launchId = +idUrl;
    }
    this.launchService.getLaunchById(this.launchId).subscribe(launch => {
      this.descCategory = launch.description;
      this.valueCategory = launch.value;
      this.dateCategory = launch.date;
      this.category = launch.category
    })
  }

  editLaunch(){
    this.toggleBtn(this.selectedCategoryId)
    let updatedLaunch:launch = {category:this.category,description:this.descCategory,value:this.valueCategory,date:this.dateCategory} 
    this.launchService.updateLaunch(this.launchId,updatedLaunch).subscribe(launch => {
      console.log(launch)
      this.router.navigate(['/user/launches'])
      this.SnackBar.open("Lançamento editado","fechar", {duration: 3000})
    })
  }

  categoriesRevenue(){
    this.notShowRevenues = false;
    this.notShowExpenses = true;
  }

  categoriesExpense(){
    this.notShowRevenues = true;
    this.notShowExpenses = false;
  }

  toggleBtn(id:number){
    this.selectedCategoryId = id;
    this.categoryService.getCategoryById(this.selectedCategoryId).subscribe(category => this.category = category)
  }

}
