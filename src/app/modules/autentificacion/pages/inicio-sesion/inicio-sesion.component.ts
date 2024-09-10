import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  // ####################################### INGRESADO
  // Importamos la interfaz de usuario e inicializamos vacío
  usuarioIngresado: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // Función para el inicio de sesión
  async iniciarSesion() {
    
    const credenciales = {
      email: this.usuarioIngresado.email,
      password: this.usuarioIngresado.password
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
      .then(res => {
        alert('¡Se ha logueado con éxito! :D');

        this.servicioRutas.navigate(['/inicio']);
      })
      .catch(err => {
        alert('Hubo un problema al iniciar sesión :( ' + err);

        this.limpiarInputs();
      })
  }

  // Función para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      email: this.usuarioIngresado.email = '',
      password: this.usuarioIngresado.password = ''
    }
  }
}