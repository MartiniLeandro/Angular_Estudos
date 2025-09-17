import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Launches } from '../../services/launch/launches.service';
import { launch } from '../../models/launchData';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../dialogs/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-launches-page',
  imports: [Navbar, CommonModule, RouterModule],
  templateUrl: './launches-page.html',
  styleUrl: './launches-page.scss'
})
export class LaunchesPage {
  constructor(private launchService:Launches, private dialog:MatDialog){}

  launches:launch[] = [];
  value=true;

  ngOnInit(){
    this.showLaunches();
  }

  deleteLaunch(){
    this.dialog.open(ConfirmDialog)
  }

  showLaunches(){
    this.launchService.getAllLaunches().subscribe(data => {
      this.launches = data;
    })
  }

}
