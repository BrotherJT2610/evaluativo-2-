import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// Servicio de Autentificación
import { AuthService } from '../../services/auth.service';
// Servicio de rutas que otorga Angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Este "hide" es para el input de contraseña
  hide = true;

  // IMPORTACIÓN DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // CREAR UNA COLECCIÓN QUE SOLO RECIBE OBJETOS DEL TIPO USUARIOS
  coleccionUsuarios: Usuario[] = [];

  // Referenciamos a nuestros servicios
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ){}

  // FUNCIÓN ASINCRONICA PARA EL REGISTRO
  async registrar(){
    
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    // constante "res" = resguarda una respuesta
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    // El método THEN nos devuelve la respuesta esperada por la promesa
    .then(res => {
      alert('Ha agregado un usuario con éxito :)');

      // Accedemos al servicio de rutas -> método navigate
      // método NAVIGATE = permite dirigirnos a diferentes vistas
      this.servicioRutas.navigate(['/inicio']);
    })
    // El método CATCH toma una falla y la vuelve un ERROR
    .catch(error => {
      alert('Hubo un problema al registrar un nuevo usuario :(');
    })

    // Llamamos a la función limpiarInputs() para que se ejecute
    this.limpiarInputs();
  }

  // Función para vaciar el formulario
  limpiarInputs(){
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}