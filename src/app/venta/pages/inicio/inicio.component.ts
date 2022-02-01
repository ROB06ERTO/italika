import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moto } from '../../../models/moto';
import { MotosService } from '../../../service/motos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 
  error:boolean = true; 
  listMoto:Moto[]=[];
  constructor(private motoService:MotosService, private router: Router) { }

  // promesa = new Promise((resolve, reject) => {

  //   console.log("Manda llamar el metodo de las motos primero");
  //   this.motoService.getAll().subscribe(motos=>{
  //     this.listMoto=motos as Moto[];
  //     console.log("las motos son promesa :",this.listMoto);
  //   }) 
     
  //   if (true) // coloca false para ejecutar el .catch()
  //   {
  //     resolve('Hola Soy una Promesa ');
  //   }
  //   else
  //   {
  //     reject('algo salio mal con la promesa ');
  //   }
  // });

  ngOnInit(): void {

    // this.promesa.then(promesa=>{
    //  console.log(promesa);
    // })
   
    this.getMotos().then(promesa=> console.log("valor de la promesa es",promesa));
    this.cargaMotos();
   
  }


  
  
  public cargaMotos():void{
    this.motoService.getAll().subscribe(motos=>{
      this.listMoto=motos as Moto[];
      console.log("las motos son :",this.listMoto);
    })
  }

  public fotoBoton(moto:Moto):void{
    console.log("motoes ",moto);
    this.router.navigate(['/motos/'+moto.id]);
  }


  getMotos():Promise<unknown>{
   const promesa=new Promise(resolve=>{
    // fetch("http://localhost:9929/moto/list").
    // then(promesa=>promesa.json()).
    // then(body=>resolve(body));

    this.motoService.getAll().subscribe(motos=>{
      this.listMoto=motos as Moto[];
      resolve(this.listMoto);
    })
    return resolve;
   });

   return promesa;
  }
  

 
}
