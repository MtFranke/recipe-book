import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor(private shoppingService: ShoppingListService) {
  }

  onAddItem() {
    const ingredient = new Ingredient(
      this.ingredientName.nativeElement.value,
      this.ingredientAmount.nativeElement.value);

    this.shoppingService.addIngredient(ingredient)
  }
}
