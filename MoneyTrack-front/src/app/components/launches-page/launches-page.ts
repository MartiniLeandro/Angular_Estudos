import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Launches } from '../../services/launch/launches.service';
import { launch } from '../../models/launchData';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../dialogs/confirm-dialog/confirm-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CategoryAPI } from '../../services/category/category.service';
import { category } from '../../models/categoryData';
import { DateFormatPipe } from '../../date-format-pipe';

@Component({
  selector: 'app-launches-page',
   providers: [provideNativeDateAdapter()],
  imports: [Navbar, CommonModule, RouterModule, MatExpansionModule, MatDatepickerModule, MatFormField, MatInputModule,DateFormatPipe],
  templateUrl: './launches-page.html',
  styleUrl: './launches-page.scss'
})
export class LaunchesPage {
  constructor(private launchService:Launches, private dialog:MatDialog, private snackBar:MatSnackBar, private categoryService:CategoryAPI){}

  launches:launch[] = [];
  categoryRevenue:category[]= [];
  categoryExpense:category[]= [];
  revenueValue:number = 0;
  expenseValue:number = 0;
  totalValue:number = 0;
  notShowRevenues = true;
  notShowExpenses = true;
  value=true;
  selectedCategoryId:number = 0;
  receiveToggle:boolean = false;
  expenseToggle:boolean = false;

  ngOnInit(){
    this.showLaunches();
    this.getCategories();
  }

  deleteLaunchDialog(id:number){
    const dialogRef = this.dialog.open(ConfirmDialog)
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteLaunch(id)
        this.snackBar.open("Lançamento Excluido","Fechar",{duration: 3000})
      }
    })
  }

  deleteLaunch(id:number){
    this.launchService.deleteLaunch(id).subscribe(() => {
      this.showLaunches()
    })
    console.log(id)
  }

  showLaunches(){
    this.launchService.getAllLaunches().subscribe(data => {
      this.launches = data;
      this.revenueValue = 0;
      this.expenseValue = 0;
      for(let launch of this.launches){
        if(launch.category.typeValue == "REVENUE"){
          this.revenueValue += launch.value
        }else {
          this.expenseValue += launch.value
        }
      }
      this.totalValue = this.revenueValue - this.expenseValue;
      this.remainderValue();
    })
  }

  remainderValue(){
    if(this.totalValue <= 0){
      this.value = false
    }else{
      this.value = true
    }
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(categories => {
      for(let category of categories){
        if(category.typeValue == "EXPENSE"){
          this.categoryExpense.push(category)
        }
        else {
          this.categoryRevenue.push(category)
        }
      }
    })
  }

  showReceives(){
    this.notShowRevenues = false;
    this.notShowExpenses = true;
  }

  showExpenses(){
    this.notShowExpenses = false;
    this.notShowRevenues = true;
  }

  toggleBtn(id:number){
    this.selectedCategoryId = id;
  }

  toggleType(type:string){
    if(type == 'receive'){
        this.receiveToggle = true;
        this.expenseToggle = false;
    }else if (type == 'expense'){
        this.receiveToggle = false;
        this.expenseToggle = true;
    }
  }

}
