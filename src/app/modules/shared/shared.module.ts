import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTES LOCALES
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//COMPONENETES IMPORTADOS DE MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

// RUTAS GENERALES DE TODOS LOS MÓDULOS
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class SharedModule { }
