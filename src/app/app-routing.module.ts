import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
const routes: Routes = [
    // Ruta común -> 1 solo componente
    {
      path:"",component:InicioComponent
    },
    // Carga perezosa -> 1 módulo
    // loadChildren: indica una ruta hija
    // ()=>import: ruta de dónde viene el módulo
    // .then: promesa/ función asincronica
    {
      path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
