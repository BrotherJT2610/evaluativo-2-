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
        nombre: "Cinta motorizada con inclinación",
        tipo: "cardio",
        imagen: "https://www.lacasadelfitness.com/assets/productos/galerias/33tk/33tk_1.webp",
        precio: "$799.900"
      },
      {
        id: "",
        nombre: "",
        tipo: "",
        imagen: "",
        precio: ""
      },
      {
        id: "",
        nombre: "",
        tipo: "",
        imagen: "",
        precio: ""
      }
    ]
  }
}

