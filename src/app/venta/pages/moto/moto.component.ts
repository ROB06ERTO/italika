import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotosService } from 'src/app/service/motos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Costos } from '../../../models/costos';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  moto!:Moto;
  costos!:Costos;
  id:string="";
  date:Date = new Date();
  constructor(private motoService:MotosService, private activatedRoute:ActivatedRoute,private router: Router) { }

  
  ngOnInit(): void {
  this.buscarMoto();
  this.getCostos();
  }

 public buscarMoto(){
  this.activatedRoute.params
     .subscribe(params=>{
          this.id=params["id"];
          console.log("id",this.id);
          this.motoService.getById(this.id).subscribe(moto=>{
            this.moto=moto;
            console.log("moto**",this.moto);
          });
     }
     );
 }

 public getCostos(){
   this.motoService.getCostos().subscribe(costo=>{
     this.costos=costo;
     console.log("costos",this.costos);
   });

  }

 public getTotal():number{
    return (this.moto.costo*this.costos.iva)+this.moto.costo+
            this.costos.administrativos+this.costos.accsesorios+
            this.costos.seguro;
  }

  public prestamo():void{
     
    this.router.navigate(['/prestamo']);

  }
}


