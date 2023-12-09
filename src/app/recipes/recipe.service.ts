import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService
{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Ratatouille',
      'vibrant and flavorful dish of France.',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
      [
        new Ingredient('Paprika', 1),
        new Ingredient('Cucumber', 1),
      ]),
    new Recipe('Margherita',
      'Next level Margherita pizza',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/marghuerita-6e61fd5.jpg?quality=90&webp=true&resize=300,272',
      [
        new Ingredient('Cheese',1),
        new Ingredient('Tomato',1),
        new Ingredient('Oregano',1),
      ])
  ];

  constructor(private shoppingList: ShoppingListService) {
  }

  getRecipes()
  {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingList.addIngredients(ingredients);
  }

}
