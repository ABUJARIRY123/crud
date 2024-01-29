import { Component } from '@angular/core';
import { AddEditComponent } from './add-edit/add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Server side learning';
  constructor(private _dialog: MatDialog){}
  openDialogBox() {
    this._dialog.open(AddEditComponent);
  }
  
}
