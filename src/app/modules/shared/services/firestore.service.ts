import { Injectable } from '@angular/core';
// Importamos Firestore y colecciones de la misma
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
    /**
     * Definimos una colección de usuarios PRIVADA
     * Va a ser una colección de Firestore
     * Respetará la estructura de datos de la interfaz Usuario
     */
    private usuariosCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
   }
}
