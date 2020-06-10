import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validator } from '@angular/forms';
import { CmgtService } from './../../shared/cmgt.service';
import { cModel } from 'src/app/shared/cmodel';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent implements OnInit {
  displayedColumns: string[] = ['cust_id','firstName','lastName','contact','address','Options'];
  formGroup:FormGroup;

  constructor(private c_api:CmgtService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      cust_id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      contact: new FormControl(),
      address: new FormControl()
   });
  }
  
  onAdd(NewCust:cModel){
    //console.log(NewCust)
    return this.c_api.Adddatabase(NewCust).subscribe(res=>
      {
        alert(res);
      })

  }
}
