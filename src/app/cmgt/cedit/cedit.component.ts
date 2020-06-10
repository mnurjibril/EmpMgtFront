import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup,FormBuilder,Validator } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CmgtService } from './../../shared/cmgt.service';
import { Router } from '@angular/router';
import { CviewComponent } from './../cview/cview.component';


@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CeditComponent implements OnInit {
  formGroup:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog
              ,private formBuilder:FormBuilder,private c_api:CmgtService
              ) { }

  ngOnInit(): void {

    //------------ Initializing Fornm group-------------
    this.formGroup=this.formBuilder.group({
      cust_id: [null],
      firstName: [null],
      lastName: [null],
      contact: [null],
      address: [null]
    })

  }
  DoneEdit(updatableCust){
    //console.log(EditedCust);
    return this.c_api.editdatabase(updatableCust).subscribe();
  };
  goBack():void{

  }
}
