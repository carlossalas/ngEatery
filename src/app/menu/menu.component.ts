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
          { name: 'limones' },
          { name: 'cebollas' },
        ]
      },
      {
        name: 'Tallarines Verdes',
        ingredients: [
          { name: '½ kilo de tallarines' },
          { name: '200 gramos de queso fresco' },
        ]
      },
      {
        name: 'Causa Rellena de Pollo',
        ingredients: [
          { name: '1 kilogramo de papas' },
          { name: '5 cucharadas de pasta de ají amarillo' },
          { name: '2 paltas' },
        ]
      },
      {
        name: 'Lomo Saltado de Pollo',
        ingredients: [
          { name: '4 pechugas de pollo' },
          { name: '5 tallos de cebolla china' },
          { name: '1 cebolla' },
          { name: '2 tomates' },
        ]
      },
    ]
  }

  ngOnInit(): void {
  }

}
