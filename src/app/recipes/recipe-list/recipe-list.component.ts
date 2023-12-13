import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
              private route: Router)
  {
  }

  ngOnInit() {
   this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewRecipeClick() {
    this.route.navigate(['/recipes', 'new']);
  }
}
