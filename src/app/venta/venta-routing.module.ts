import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MotoComponent } from './pages/moto/moto.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

const routes:Routes=[
 
  {
    path:'',
    
    children:[
      {path:"inicio",component:InicioComponent },
      {path:"motos/:id",component:MotoComponent},
      {path:"prestamo",component:CotizacionComponent},
      {path:"rxjs",component:RxjsComponent},
      { path:'**',redirectTo:'inicio'}
    ]
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class VentaRoutingModule { }
