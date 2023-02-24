import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page18Component } from './page18/page18.component';
import { Page20Component } from './page20/page20.component';

const routes: Routes = [
  // {path:'',component:Page20Component},
  {path:'',component:Page18Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
