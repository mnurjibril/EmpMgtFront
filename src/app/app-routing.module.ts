import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmgtComponent } from 'src/app/cmgt/cmgt.component';
import { CviewComponent } from 'src/app/cmgt/cview/cview.component';
import { HomeComponent } from 'src/app/home/home.component';




const routes: Routes = [
  { path: 'HomeTab', component:  HomeComponent},
  {  path: 'CustomerMgtTab', component:  CmgtComponent},
  { path: 'CustomerListTab', component:  CviewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
