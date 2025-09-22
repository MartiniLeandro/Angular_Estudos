import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss'
})
export class ConfirmDialog {
  constructor(private dialog:MatDialogRef<ConfirmDialog>){}

  onCancel(){
    this.dialog.close(false)
  }

  onConfirm(){
    this.dialog.close(true)
  }
}
