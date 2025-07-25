import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.css'
})
export class ParentData {
  @Input() name:string='';
  @Input() userData!: {email:string,idade:number};
}
