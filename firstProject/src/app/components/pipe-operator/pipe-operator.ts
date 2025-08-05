import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe-operator',
  imports: [CommonModule],
  templateUrl: './pipe-operator.html',
  styleUrl: './pipe-operator.css'
})
export class PipeOperator {
  someText = "TESTANDO TEXTO COM PIPE";
  date = new Date();
}
