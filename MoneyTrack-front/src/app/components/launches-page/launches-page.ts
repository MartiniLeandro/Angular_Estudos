import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Launches } from '../../services/launch/launches.service';
import { launch } from '../../models/launchData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-launches-page',
  imports: [Navbar,CommonModule],
  templateUrl: './launches-page.html',
  styleUrl: './launches-page.scss'
})
export class LaunchesPage {
  constructor(private launchService:Launches){}

  launches:launch[] = [];
  value=true;

  ngOnInit(){
    this.showLaunches();
  }

  showLaunches(){
    this.launchService.getAllTasks().subscribe(data => {
      this.launches = data;
    })
  }

}
