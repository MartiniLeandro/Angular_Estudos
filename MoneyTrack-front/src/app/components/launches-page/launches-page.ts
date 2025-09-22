import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Launches } from '../../services/launch/launches.service';
import { launch } from '../../models/launchData';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../dialogs/confirm-dialog/confirm-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-launches-page',
  imports: [Navbar, CommonModule, RouterModule],
  templateUrl: './launches-page.html',
  styleUrl: './launches-page.scss'
})
export class LaunchesPage {
  constructor(private launchService:Launches, private dialog:MatDialog, private snackBar:MatSnackBar){}

  launches:launch[] = [];
  revenueValue:number = 0;
  expenseValue:number = 0;
  totalValue:number = 0;
  value=true;

  ngOnInit(){
    this.showLaunches();
  }

  deleteLaunchDialog(id:number){
    const dialogRef = this.dialog.open(ConfirmDialog)
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteLaunch(id)
        this.snackBar.open("Lançamento Excluido","Fechar",{duration: 3000})
        this.ngOnInit()
      }
    })
  }

  deleteLaunch(id:number){
    this.launchService.deleteLaunch(id).subscribe()
    console.log(id)
  }

  showLaunches(){
    this.launchService.getAllLaunches().subscribe(data => {
      this.launches = data;
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

}
