import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MotoComponent } from './pages/moto/moto.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { VentaRoutingModule } from './venta-routing.module';
import {FormsModule} from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RxjsComponent } from './pages/rxjs/rxjs.component';



@NgModule({
  declarations: [
    InicioComponent,
    MotoComponent,
    CotizacionComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    FormsModule,
    PrimeNgModule,
    
  ]
})
export class VentaModule { }
