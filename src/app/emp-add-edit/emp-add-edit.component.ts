import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatToolbar } from '@angular/material/toolbar';
import { MatLabel } from '@angular/material/form-field';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  
education:string[]=[
  'Matric',
  'Diploma',
  'Intermediate',
  'Graduate',
  'Post Graduate'
];
// constructor(private _fb:FormBuilder){
//   this.empForm =this._fb.group({
//     firstName:'',
//     lastName:'',
//     email:'',
//     dob:'',
//     gender:'',
//     education:'',
//     company:'',
//     experience:'',
//     package:''
//   })
// }
}
