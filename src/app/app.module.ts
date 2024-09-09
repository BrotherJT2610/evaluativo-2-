import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

// VINCULACIONES/ IMPORTACIONES CON FIREBASE
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
     // COMPONENTES GLOBALES
     SharedModule,
     // Inicializa firebase en nuestro proyecto
     AngularFireModule.initializeApp(environment.firebaseConfig),
     // Autentificación
     AngularFireAuthModule,
     // Storage -> BD de imágenes 
     AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
