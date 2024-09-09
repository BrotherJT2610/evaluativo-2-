import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//IMPORTACION A LAS VISTAS DEL MODULO AUTENTIFICACION
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"inicio-sesion",component:InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
