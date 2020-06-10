import { Component, OnInit } from '@angular/core';
import { cModel } from './../../shared/cmodel';
import { CmgtService } from './../../shared/cmgt.service';
import { DataSource } from '@angular/cdk/table';
import { endWith } from 'rxjs/operators';
import { Router } from '@angular/router';
//---Edit function
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CeditComponent  } from 'src/app/cmgt/cedit/cedit.component';
import { CaddComponent  } from 'src/app/cmgt/cadd/cadd.component';


@Component({
  selector: 'app-cview',
  templateUrl: './cview.component.html',
  styleUrls: ['./cview.component.css']
})
export class CviewComponent implements OnInit {
displayedColumns: string[] = ['cust_id','firstName','lastName','contact','address','Options'];


  cdata : cModel[]=[];
  selectedCust : cModel[]=[];

  constructor(private c_api:CmgtService,public dialog: MatDialog,private router: Router){ }

  ngOnInit(): void {
    this.c_api.getc().subscribe((res:any)=>{
      this.cdata=res;
    })
  }
  onEdit(id){
  this.c_api.Selectraw(id)
      .subscribe((res:any)=>{
          this.dialog.open(CeditComponent, {width: '600px',
            data:{ cust_id:res.cust_id,
              firstName:res.firstName,
              lastName:res.lastName,
              contact:res.contact,
              address:res.address
            }});
        })
  }

  onDelete(cust_id){
  this.c_api.Deletedata(cust_id).subscribe((res:any)=>{
      console.log("Data Deleted is " + cust_id),
      this.router.navigateByUrl("/HomeTab");

  });
  }
  goAdd(){
    this.dialog.open(CaddComponent, {width: '600px'});
  }
}
