import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog'
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';


@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent {
  constructor(private _dialog: MatDialog) {
    
  }
  
openAddEditEmpForm(){
  
  this._dialog.open(EmpAddEditComponent);
}


}
