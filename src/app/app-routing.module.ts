import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { Page18Component } from './page18/page18.component';
import { Page20Component } from './page20/page20.component';
import { Page25Component } from './page25/page25.component';

const routes: Routes = [
  // {path:'',component:Page20Component},
  // {path:'',component:Page18Component},
  {path:'',component:Page25Component},
  // {path:'',component:NewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
