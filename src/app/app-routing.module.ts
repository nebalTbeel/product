import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {AddProductComponent} from './add-product/add-product.component'


const routes: Routes = [

  {path:'about', component: AboutComponent},
  {path:'addProduct', component: AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
  data = [
    {id:1, name :'ali'},
    {id:2, name :'Ola'},
    {id:3, name :'Osama'},
      ]

}
