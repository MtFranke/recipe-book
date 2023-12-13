import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService
{

  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number)
  {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingList.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
