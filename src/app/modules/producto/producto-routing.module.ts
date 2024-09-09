import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACIONES DEL MODULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { MaquinasComponent } from './pages/maquinas/maquinas.component';
import { CardioComponent } from './pages/cardio/cardio.component';
import { BancosComponent } from './pages/bancos/bancos.component';

// Este módulo solo se encarga de las rutas relacionadas con productos
const routes: Routes = [
  { path: 'producto', component: ProductoComponent },
  { path: 'maquinas', component: MaquinasComponent },
  { path: 'cardio', component: CardioComponent },
  { path: 'bancos', component: BancosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
