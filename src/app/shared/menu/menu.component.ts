import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];
  constructor( private router: Router) { }

  ngOnInit(): void {
   this.Menu();
  }

  public Menu(){
    this.items = [
     { separator:true},
      {
          label: 'Modelos',
          items: [{
                  label: 'Deportivas',command:()=>{
                    this.router.navigate(['/inicio']);
                   }
                  },

                  {label: 'Otras',command:()=>{
                    this.router.navigate(['/rxjs']);
                   }
                  },
                  
                  {label: 'Motonetas'},
                  {label: 'Trbajo'}
                ]
      },
      {
          label: 'Protecciones',
          items: [
              {label: 'Cascos'},
              {label: 'Rodilleras'},
              {label: 'Chamarras'},
              {label: 'Botas'}
          ]
      }
  ];

  }

}
