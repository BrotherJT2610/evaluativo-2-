import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

//ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { CardioComponent } from './pages/cardio/cardio.component';
import { BancosComponent } from './pages/bancos/bancos.component';
import { ProductoComponent } from './pages/producto/producto.component';

//COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CardBancosComponent } from './components/card-bancos/card-bancos.component';
import { CardMaquinasComponent } from './components/card-maquinas/card-maquinas.component';
import { CardCardioComponent } from './components/card-cardio/card-cardio.component';


@NgModule({
  declarations: [
    MaquinasComponent,
    CardioComponent,
    BancosComponent,
    ProductoComponent,
    CardComponent,
    CardBancosComponent,
    CardMaquinasComponent,
    CardCardioComponent,
    
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatTabsModule
  ],

  exports: [
    ProductoComponent,
    CardioComponent,
    BancosComponent,
    MaquinasComponent,
    CardComponent,
    CardBancosComponent,
    MatTabsModule
    
  ]
})
export class ProductoModule { }
