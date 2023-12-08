import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService
{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe1', 'this is simply a test1', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Recipe('A test recipe2', 'this is simply a test2', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ];

  getRecipes()
  {
    return this.recipes.slice();
  }

}
