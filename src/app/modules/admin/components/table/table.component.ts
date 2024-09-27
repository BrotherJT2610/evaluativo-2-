import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear colección de productos del tipo producto -> lo definimos como un array
  coleccionProductos: Producto[] = [];

  // Variable para manejar el estado de Edición y Eliminación de productos
  modalVisibleProducto: boolean = false;

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!: Producto; // <- recibe valores vacíos

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    // subscribe -> notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // guarda la información recibida como un nuevo "producto" a la colección
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    // validamos los valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        // idProducto no se toma porque es generado por la BD y no por el usuario
        idProducto: '',
        // el resto es tomado con información ingresada por el usuario
        nombre: this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        Swal.fire({
          title: "Bien Hecho!",
          text: "Ha agregado un nuevo producto con éxito!",
          icon: "success"
        });
        // Limpiamos formulario para agregar nuevos productos
        this.producto.reset();
      })
      .catch(error => {
        Swal.fire({
          title: "ERROR",
          text: "Hubo un problema al agregar un nuevo producto",
          icon: "error"
        });
        this.producto.reset();
      })
    }
  }

    // Función para alertar al usuario del producto que desea eliminar
    mostrarBorrar(productoSeleccionado: Producto){
      // abre el modal
      this.modalVisibleProducto = true;
  
      // toma los valores del producto elegido
      this.productoSeleccionado = productoSeleccionado;
    }
  
    // Función para eliminar definitivamente al producto
    borrarProducto(){
      this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
      .then(respuesta => {
        Swal.fire({
          title: "Hecho!",
          text: "El producto se ha eliminado correctamente.",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "ERROR",
          text: "No se ha podido eliminar el producto \n"+error,
          icon: "error"
        });
      })
    }

    // Función para seleccionar el producto a editar
  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado = productoSeleccionado;

    // Enviar o "setear" los nuevos valores y reasignarlos a las variables
    // El ID no se vuelve a enviar ni se modifica, por ende no lo llamamos
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  editarProducto(){
    let datos: Producto = {
      // Solo el ID toma y deja igual su valor
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!
    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      Swal.fire({
        title: "Bien ahí!",
        text: "El producto fue modificado con éxito.",
        icon: "success"
      });
      
    })
    .catch(error => {
      alert("Hubo un problema al modificar el producto.");
      Swal.fire({
        title: "ERROR",
        text: "Hubo un problema al modificar el producto.",
        icon: "error"
      });
    })
  }
}
