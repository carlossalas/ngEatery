import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Array<Dish> = [];

  dish: Dish;

  constructor() {
    this.dishes = [
      {
        name: 'Ceviche',
        ingredients: [
          { name: 'Limones', qty: 2 },
          { name: 'Cebollas', qty: 2 },
        ]
      },
      {
        name: 'Tallarines Verdes',
        ingredients: [
          { name: '1/2 kilo de tallarines', qty: 1 },
          { name: '200 gramos de queso fresco', qty: 1 },
        ]
      },
      {
        name: 'Causa Rellena de Pollo',
        ingredients: [
          { name: '1 kilogramo de papas', qty: 1 },
          { name: 'Cucharadas de pasta de ají amarillo', qty: 5 },
          { name: 'Paltas', qty: 2 },
        ]
      },
      {
        name: 'Lomo Saltado de Pollo',
        ingredients: [
          { name: 'Pechugas de pollo', qty: 4 },
          { name: 'Tallos de cebolla china', qty: 5 },
          { name: 'Cebolla', qty: 1 },
          { name: 'Tomates', qty: 2 },
        ]
      },
    ];
  }

  ngOnInit(): void {
  }

  selectedDish(dish: Dish): void {
    this.dish = dish;
  }

}
