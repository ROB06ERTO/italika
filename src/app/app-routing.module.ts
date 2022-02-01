import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  
    {path:'',
    loadChildren:()=> import('./venta/venta.module').then(m=> m.VentaModule)} ,
    {path :'**' , redirectTo:''}
  
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
