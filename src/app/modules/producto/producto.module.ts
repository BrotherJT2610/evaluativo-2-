import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { CardioComponent } from './pages/cardio/cardio.component';
import { BancosComponent } from './pages/bancos/bancos.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    MaquinasComponent,
    CardioComponent,
    BancosComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],

  exports: [
    ProductoComponent,
    CardioComponent,
    BancosComponent,
    MaquinasComponent
  ]
})
export class ProductoModule { }
