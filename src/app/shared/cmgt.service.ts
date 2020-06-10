import { Injectable } from '@angular/core';
import { Observable,of,throwError,pipe  } from 'rxjs';
import {HttpClient,HttpHeaders,HttpErrorResponse, HttpClientModule} from '@angular/common/http'



import { Router } from '@angular/router';
import {Location} from '@angular/common';


import { CmgtComponent } from './../cmgt/cmgt.component';
import { CviewComponent } from './../cmgt/cview/cview.component';

import { cModel } from './../shared/cmodel';
import { map, catchError,tap, } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

const apiUrl="https://localhost:44338/api/customerdbs/";
const addapiUrl="https://localhost:44338/api/customerdbs";

@Injectable({
  providedIn: 'root'
})
export class CmgtService {
  selecteddata:any;
  constructor( private http:HttpClient ,private router:Router
                ,private location:Location) { }
  public handleError<T>(operation ='operation',result?:T){
    return (error:any):Observable<T>=>{
  console.error(error);
  return of(result as T);
}  }

getc(){

  return this.http.get<cModel[]>(`${apiUrl}`)
  .pipe(
    tap(cModel=>console.log('Sucess getting all customers')),
    catchError(this.handleError('getcList',[]))
  )
}
Selectraw(id): Observable<any>{
  return this.http.get<cModel[]>(apiUrl+id)
}
private createHttpOptions() {
        const headersMap = {
            'Content-Type': 'application/json',
        }

        return {
            headers: new HttpHeaders(headersMap)
        };
    }

editdatabase(updatableCust:cModel):Observable<any>{

  console.log(`${apiUrl}${updatableCust.cust_id}`);
  return this.http.put(`${apiUrl}${updatableCust.cust_id}`,updatableCust,this.createHttpOptions())
        .pipe(
        tap(updatedCust=>console.log(`updated customer is ${JSON.stringify(updatedCust)}`)),
        catchError(error=>of(new cModel()))
        );
}


Deletedata(id:number): Observable<any> {
  const url=`${apiUrl}${id}`;
  console.log("delete URL: "+url);
  return this.http.delete(url, httpOptions).pipe(
    tap(_=>console.log("deleted id is "+id)),
    catchError(this.handleError<any>('error happned'))
  );
}

Adddatabase(newCust:cModel){
  //console.log(newCust);
  return this.http.post<cModel>(addapiUrl,newCust,httpOptions)

}

}
//getcList(): Observable<cModel[]> {}

