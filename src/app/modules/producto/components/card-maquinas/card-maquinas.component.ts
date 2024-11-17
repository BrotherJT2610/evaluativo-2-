import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-maquinas',
  templateUrl: './card-maquinas.component.html',
  styleUrls: ['./card-maquinas.component.css']
})
export class CardMaquinasComponent {
   // Colección de todos los productos
   coleccionProductos: Producto[] = [];

   // Colección de sólo productos de categoría "Bancos"
   coleccionMaquinas: Producto[] = [];
 
   productoSeleccionado!: Producto;
 
   modalVisible: boolean = false;
 
   constructor(public servicioCrud: CrudService){}
 
   ngOnInit(): void{
     this.servicioCrud.obtenerProducto().subscribe(producto => {
       this.coleccionProductos = producto;
 
       // mostrar la colección actual de cardio
       this.mostrarProductoBancos();
     })
 
   }
 
   // Función para filtrar los productos que sean del tipo "maquinas"
   mostrarProductoBancos(){
     // forEach: itera la colección
     this.coleccionProductos.forEach(producto => {
       // Si la categoría del producto es igual a "maquinas", se enviará a la 
       // colección de bancos específicada
 
       if(producto.categoria === "maquinas"){
         // .push: sube o agrega un item a una colección
         this.coleccionMaquinas.push(producto);
       }
     })
   }
 
   // Muestra información completa de un producto elegido por el usuario
   mostrarVer(info: Producto){
     this.modalVisible = true;
 
     this.productoSeleccionado = info;
   }
   mostrarAlerta() {
    Swal.fire({
     title: "¡Ocurrió un Error! ",
     text: "Boton en Reparación",
     icon: "info"

     
   });
}}
