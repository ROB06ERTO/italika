import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {ScrollTopModule} from 'primeng/scrolltop';
import { ScrollPanelModule } from "primeng/scrollpanel";
import {ImageModule} from 'primeng/image';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {FocusTrapModule} from 'primeng/focustrap';
@NgModule({
  declarations: [],
  
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    TabViewModule,
    ScrollTopModule,
    ScrollPanelModule,
    ImageModule,
    AccordionModule,
    PanelModule,
    FocusTrapModule

    
  ]
})
export class PrimeNgModule { }
