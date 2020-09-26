import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish.interface'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Array<Dish> = [];

  constructor() {
    this.dishes = [
      {
        name: 'Ceviche',
        ingredients: [
          { name: 'limones', qty: 2 },
          { name: 'cebollas', qty: 2 },
        ]
      },
      {
        name: 'Tallarines Verdes',
        ingredients: [
          { name: '½ kilo de tallarines', qty: 2 },
          { name: '200 gramos de queso fresco', qty: 2 },
        ]
      },
      {
        name: 'Causa Rellena de Pollo',
        ingredients: [
          { name: '1 kilogramo de papas', qty: 2 },
          { name: '5 cucharadas de pasta de ají amarillo', qty: 2 },
          { name: '2 paltas', qty: 2 },
        ]
      },
      {
        name: 'Lomo Saltado de Pollo',
        ingredients: [
          { name: '4 pechugas de pollo', qty: 2 },
          { name: '5 tallos de cebolla china', qty: 2 },
          { name: '1 cebolla', qty: 2 },
          { name: '2 tomates', qty: 2 },
        ]
      },
    ]
  }

  ngOnInit(): void {
  }

}
