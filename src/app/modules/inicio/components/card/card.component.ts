import { Component } from '@angular/core';
import { Gym } from 'src/app/models/gym';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Gym[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Cinta Caminadora Modelo X8400A",
        tipo: "cardio",
        imagen: "https://tienda.gfitness.com.ar/web/image/product.product/4651/image_1024/%5BX8400A%5D%20Cinta%20Caminadora%20Modelo%20X8400A?unique=42f19fa",
        precio: "$ 5.347.308,85"
      },
      {
        id: "",
        nombre: "Banco ajustable",
        tipo: "bancos",
        imagen: "https://tienda.gfitness.com.ar/web/image/product.product/2920/image_1024/%5BMND-FF39%5D%20Banco%20Ajustable%20F-LINE?unique=063c632",
        precio: "$1.432.207,01"
      },
      {
        id: "",
        nombre: "MULTIBANCO - HOGAR",
        tipo: "bancos",
        imagen: "https://tienda.gfitness.com.ar/web/image/product.product/1947/image_1024/%5BAW-066%5D%20MULTIBANCO%20-%20HOGAR?unique=063c632",
        precio: "$ 365.500,22"
      },
      {
        id: "",
        nombre: "Vertical Traction C-LINE",
        tipo: "maquinas",
        imagen: "https://tienda.gfitness.com.ar/web/image/product.product/1869/image_1024/%5BTZ-6063-Y920Z%5D%20Vertical%20Traction%20C-LINE?unique=452845f",
        precio: "$ 2.320.078,91"
      },
      {
        id: "",
        nombre: "AirBike Gfitness Elite",
        tipo: "cardio",
        imagen: "https://tienda.gfitness.com.ar/web/image/product.product/3872/image_1024/%5BMND-C13%5D%20AirBike%20Gfitness%20Elite?unique=ec8c2c9",
        precio: "$ 2.008.389,11"
      },
      {
        id: "",
        nombre: "Prensa de Piernas C-LINE",
        tipo: "maquinas",
        imagen: "https://tienda.gfitness.com.ar/web/image/product.product/1860/image_1024/%5BTZ-6066-Y950Z%5D%20Prensa%20de%20Piernas%20%20C-LINE?unique=ee8ecdb",
        precio: "$ 2.652.466,87"
      },
    ]
  }
}

