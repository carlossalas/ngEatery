import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish, Ingredient } from '../interfaces';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish;
  @Output() onSelectDish = new EventEmitter<Dish>();

  /* private _name: string;
  @Input() set name(value: string) {
    this._name = this.generateName(value);
  } */
  get name(): string {
    return this.generateName(this.dish.name);
  }

  /* private _ingredients: [];
  @Input() set ingredients(list: []) {
    this._ingredients = list;
  } */
  get ingredients(): Array<Ingredient> {
    return this.dish.ingredients;
  }

  constructor() { }

  ngOnInit(): void {
  }

  generateName = (name: string) => {
    return `Receta: ${name}`;
  }

  generateCantIngredient = () => {
    return `Cantidad: ${this.ingredients.length}`;
  }

  selectDish(): void {
    console.log('selectDish', this.dish);
    this.onSelectDish.emit(this.dish);
  }

}
