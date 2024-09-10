import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

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

    try{
      // Obtenemos el usuario desde la BD -> Cloud Firestore
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      // ! -> si es diferente
      // .empy -> método de Firebase para marcar si algo es vacío
      if(!usuarioBD || usuarioBD.empty){
        alert('El correo electrónico no está registrado.');
        this.limpiarInputs();
        return;
      }
      
      /* Primer documento (registro) en la colección de usuarios que se obtiene desde la 
        consulta.
      */
      const usuarioDoc = usuarioBD.docs[0];

      /**
       * Extrae los datos del documento en forma de un objeto y se específica como de tipo 
       * "Usuario" -> haciendo referencia a nuestra interfaz de Usuario.
       */
      const usuarioData = usuarioDoc.data() as Usuario;

      // Hash de la contraseña ingresada por el usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if(hashedPassword !== usuarioData.password){
        alert("Contraseña incorrecta");

        this.usuarioIngresado.password = '';
        return;
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
    }catch(error){
      this.limpiarInputs();
    }
  }

  // Función para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      email: this.usuarioIngresado.email = '',
      password: this.usuarioIngresado.password = ''
    }
  }
}