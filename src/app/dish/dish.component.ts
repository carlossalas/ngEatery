import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  private _name: string;
  @Input() set name(value: string) {
    this._name = this.generateName(value);
  }
  get name(): string {
    return this._name;
  }

  private _ingredients: [];
  @Input() set ingredients(list: []) {
    this._ingredients = list;
  }

  constructor() { }

  ngOnInit(): void {
  }

  generateName = (name: string) => {
    return `El nombre es: ${name}`;
  }

  generateCantIngredient = (list: []) => {
    return `La cantidad de ingredientes es: ${this._ingredients.length}`;
  }

}
